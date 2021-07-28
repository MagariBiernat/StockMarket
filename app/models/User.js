import mongoose from "mongoose"
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

mongoose.models = {}

const User = mongoose.model("User", UserSchema)

export default User
