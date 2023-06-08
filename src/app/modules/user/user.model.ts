import { model, Schema } from 'mongoose'
import IUserInterface from './user.interface'

const userSchema = new Schema<IUserInterface>({
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
  roles: {
    type: [String],
  },
  accountStatus: {
    type: String,
  },
})

const User = model('User', userSchema)

export default User
