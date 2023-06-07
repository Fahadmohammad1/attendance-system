import { model, Schema } from 'mongoose'
import IUserInterface from './user.interface'

const userSchema = new Schema<IUserInterface>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  roles: {
    type: [String],
  },
  accountStatus: {
    type: String,
  },
})

const User = model('User', userSchema)

module.exports = User
