import { connectToDatabase } from "../../utils/mongodb";
import {
  POST,
  REQ_METHOD_NOT_SUPPORTED,
  DATA_INCOMPLETE,
} from "../../constants/http";
import bcrypt from "bcrypt";
import User from "../../models/User";
import jwt from "jsonwebtoken";

const SECRET_KEY =
  "f51173edb96636075ae6ff028a25e647583cb8dc40cf38f78a7287d3987d6a78e8f5e940932d7933607ca0a1099e1faa97eff60e73a355b469fa62493ecb8e46";

export default async function handler(req, res) {
  console.log(req.body, req.method);

  if (req.method !== "POST") {
    return res.status(422).json({ message: "1" });
  }

  const { email, password } = req.body;

  if (email && password) {
    const { db } = await connectToDatabase();

    await db
      .collection("users")
      .findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "wrong passy xd" });
        }

        bcrypt.compare(password, user.password).then(async (result) => {
          if (!result) {
            return res.status(404).json({ message: "wrong passy xd" });
          }

          const payload = {
            id: user._id,
            email: user.email,
          };

          console.log("SEKRET", SECRET_KEY);

          jwt.sign(
            payload,
            SECRET_KEY,
            {
              expiresIn: 65000,
            },
            (err, token) => {
              return res.json({ token });
            }
          );

          return res.json({ token2 });
        });
      });
  } else {
    return res.status(422).json({ message: "nie wyszlo" });
  }
}
