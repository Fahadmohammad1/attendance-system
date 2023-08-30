import { Model } from 'mongoose'

type IUserInterface = {
  name: string
  email: string
  age: number
  password: string
  roles: string[]
  accountStatus: string
}

export type UserModel = Model<IUserInterface, Record<string, unknown>>

export default IUserInterface
