import { Request, Response } from 'express'
import { UserService } from './user.service'
import User from './user.model'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body
  const user = await User.findOne({ email })

  if (user) {
    return res.status(400).json({
      message: 'user already exist',
    })
  }
  const result = await UserService.createUser(req.body)

  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'name', 'email', 'age'])
  const paginationOptions = pick(req.query, paginationFields)

  const result = await UserService.getAllUser(paginationOptions, filters)

  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'User retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})

export const UserController = {
  createUser,
  getAllUser,
}
