import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default model('User', UserSchema)
