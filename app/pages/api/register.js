import { connectToDatabase } from "../../utils/mongodb"
import {
  POST,
  REQ_METHOD_NOT_SUPPORTED,
  DATA_INCOMPLETE,
} from "../../constants/http"
import bcrypt from "bcrypt"
import User from "../../models/User"

export default async function handler(req, res) {
  console.log(req.body, req.method)
  if (req.method !== "POST") {
    return res.status(422).json({ message: "1" })
  }

  const { name, email, password } = req.body

  if (name && email && password) {
    const { db } = await connectToDatabase()

    try {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) throw err
          newUser.password = hash
          const response = await db.collection("users").insertOne(newUser)

          return res.json(response)
        })
      })
    } catch (error) {
      return res.status(500).json({ message: "23" + error })
    }
  } else {
    return res.status(422).json({ message: "3" })
  }
}
