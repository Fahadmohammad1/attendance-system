import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is Required',
    }),
    roles: z.string({
      required_error: 'Role is Required',
    }),
    email: z.string({
      required_error: 'Email is Required',
    }),
    age: z.string({
      required_error: 'Age is Required',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
