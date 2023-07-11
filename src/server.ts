import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { Server } from 'http'

process.on('uncaughtException', error => {
  console.error(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('DB connected')

    server = app.listen(config.port, () => {
      console.log(`Application listening on ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect', error)
  }
}

process.on('unhandledRejection', error => {
  if (server) {
    server.close(() => {
      console.error(error)
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})

main().catch(error => console.log('from main function', error))

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })
