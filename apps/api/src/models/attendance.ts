import { Schema, model, Document } from 'mongoose';

interface IAttendance extends Document {
  employeeId: string;
  date: Date;
  status: 'present' | 'absent' | 'leave';
  notes?: string;
}

const AttendanceSchema = new Schema<IAttendance>({
  employeeId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['present', 'absent', 'leave'], required: true },
  notes: { type: String },
}, {
  timestamps: true,
});

const Attendance = model<IAttendance>('Attendance', AttendanceSchema);

export default Attendance;