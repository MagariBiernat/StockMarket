import { Strategy as JwtStrategy } from "passport-jwt"
import { ExtractJwt } from "passport-jwt"
import mongoose from "mongoose"

const User = mongoose.model("users")
const SECRET_KEY = process.env.SECRET_KEY

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
opts.secretOrKey = SECRET_KEY

export default function (passport) {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({ _id: jwt_payload.id }, (err, user) => {
        if (err) {
          return done(err, false)
        }

        if (!user) {
          return done(null, false)
        }

        return done(null, user)
      })
    })
  )
}
