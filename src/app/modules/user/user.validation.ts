import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is Required',
    }),
    role: z.string({
      required_error: 'Role is Required',
    }),
    email: z.string({
      required_error: 'Email is Required',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
