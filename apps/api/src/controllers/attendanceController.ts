import { Request, Response } from 'express';
import Attendance from '../models/attendance';

// Create a new attendance record
export const createAttendance = async (req: Request, res: Response) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all attendance records
export const getAllAttendance = async (req: Request, res: Response) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get attendance record by ID
export const getAttendanceById = async (req: Request, res: Response) => {
    try {
        const attendance = await Attendance.findById(req.params.id);
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an attendance record
export const updateAttendance = async (req: Request, res: Response) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an attendance record
export const deleteAttendance = async (req: Request, res: Response) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!attendance) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};