import { Schema, model } from 'mongoose'

const adminAttendanceSchema = new Schema({
  timeLimit: Number,
  status: String,
  createdAt: Date,
})

const AdminAttendance = model('AdminAttendance', adminAttendanceSchema)

export default AdminAttendance
