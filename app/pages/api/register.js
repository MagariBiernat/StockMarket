import { connectToDatabase } from "../../lib/mongodb"
import {
  POST,
  REQ_METHOD_NOT_SUPPORTED,
  DATA_INCOMPLETE,
} from "../../constants/http"
import { bcrypt } from "bcrypt"
import User from "../../models/User"

export default async function handler(req, res) {
  if (req.method !== POST) {
    return res.status(422).send(REQ_METHOD_NOT_SUPPORTED)
  }

  const { name, email, password } = req.body
  const { db } = await connectToDatabase()

  if (name && email && password) {
    try {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          const response = await db.collection("users").insertOne(newUser)

          return res.json(response)
        })
      })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    return res.status(422).send(DATA_INCOMPLETE)
  }
}
