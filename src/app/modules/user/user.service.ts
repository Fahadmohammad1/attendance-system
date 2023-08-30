import { SortOrder } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import calculatePagination from '../../../helpers/paginationHelper'
import { IpaginationOptions } from '../../../interfaces/pagination'
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

const getAllUser = async (paginationOptions: IpaginationOptions) => {
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const result = await User.find({})
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await User.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const UserService = {
  createUser,
  getAllUser,
}
