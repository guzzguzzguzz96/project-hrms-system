import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  dateOfJoining: Date;
}

const EmployeeSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
}, { timestamps: true });

const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);

export default Employee;