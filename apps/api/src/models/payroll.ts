import mongoose, { Document, Schema } from 'mongoose';

export interface IPayroll extends Document {
  employeeId: mongoose.Types.ObjectId;
  salary: number;
  bonus?: number;
  deductions?: number;
  payDate: Date;
}

const PayrollSchema: Schema = new Schema({
  employeeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Employee',
  },
  salary: {
    type: Number,
    required: true,
  },
  bonus: {
    type: Number,
    default: 0,
  },
  deductions: {
    type: Number,
    default: 0,
  },
  payDate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

const Payroll = mongoose.model<IPayroll>('Payroll', PayrollSchema);

export default Payroll;