import IUserInterface from './user.interface'
import User from './user.model'

const createUser = async (user: IUserInterface) => {
  const createdUser = new User(user)
  await createdUser.save()

  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
