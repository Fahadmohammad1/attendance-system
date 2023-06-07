import mongoose from 'mongoose'
import app from './app'
const port = process.env.PORT || 5000
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/attendance-system')
    console.log('DB connected')

    app.listen(port, () => {
      console.log(`Application listening on ${port}`)
    })
  } catch (error) {
    console.log('Failed to connect', error)
  }
}

main().catch(error => console.log('from main function', error))
