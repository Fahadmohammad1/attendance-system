import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
import User from './user.model'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body
  const user = await User.findOne({ email })

  if (user) {
    return res.status(400).json({
      message: 'user already exist',
    })
  }
  const result = await UserService.createUser(req.body)

  next()

  res.status(201).json({
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  })
}

export const UserController = {
  createUser,
}
