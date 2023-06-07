import dontenv from 'dotenv'
import path from 'path'
dontenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
}
