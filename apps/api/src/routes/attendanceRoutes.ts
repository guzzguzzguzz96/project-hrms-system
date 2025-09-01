import { Router } from 'express';
import {
  getAttendanceRecords,
  createAttendanceRecord,
  updateAttendanceRecord,
  deleteAttendanceRecord,
} from '../controllers/attendanceController';

const router = Router();

// Route to get all attendance records
router.get('/', getAttendanceRecords);

// Route to create a new attendance record
router.post('/', createAttendanceRecord);

// Route to update an existing attendance record
router.put('/:id', updateAttendanceRecord);

// Route to delete an attendance record
router.delete('/:id', deleteAttendanceRecord);

export default router;