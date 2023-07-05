import ApiError from '../../../errors/ApiError'
import IUserInterface from './user.interface'
import User from './user.model'
import bcrypt from 'bcryptjs'

const createUser = async (user: IUserInterface) => {
  const createdUser = new User(user)

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(user.password, salt)
  createdUser.password = hash
  await createdUser.save()

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
