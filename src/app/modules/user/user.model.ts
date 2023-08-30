import { model, Schema } from 'mongoose'
import IUserInterface, { UserModel } from './user.interface'

const userSchema = new Schema<IUserInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      required: true,
    },
    accountStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const User = model<IUserInterface, UserModel>('User', userSchema)

export default User
