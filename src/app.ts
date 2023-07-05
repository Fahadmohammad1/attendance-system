import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from '../src/app/modules/user/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRoute)

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('working successfully')
})

app.use(globalErrorHandler)

export default app
