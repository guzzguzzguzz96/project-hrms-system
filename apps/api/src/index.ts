import express from 'express';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employeeRoutes';
import payrollRoutes from './routes/payrollRoutes';
import attendanceRoutes from './routes/attendanceRoutes';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use('/api/employees', employeeRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/attendance', attendanceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});