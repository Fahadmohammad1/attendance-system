import express from 'express'
import { UserController } from './user.controller'
import validateRequest, {
  validateRequestTwo,
} from '../../middleware/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  validateRequestTwo('hello'),
  UserController.createUser
)

export default router
