import { Request, Response } from 'express';
import Payroll from '../models/payroll';

// Create a new payroll record
export const createPayroll = async (req: Request, res: Response) => {
    try {
        const payrollData = req.body;
        const newPayroll = new Payroll(payrollData);
        await newPayroll.save();
        res.status(201).json(newPayroll);
    } catch (error) {
        res.status(500).json({ message: 'Error creating payroll record', error });
    }
};

// Get all payroll records
export const getPayrolls = async (req: Request, res: Response) => {
    try {
        const payrolls = await Payroll.find();
        res.status(200).json(payrolls);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payroll records', error });
    }
};

// Get a specific payroll record by ID
export const getPayrollById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payroll = await Payroll.findById(id);
        if (!payroll) {
            return res.status(404).json({ message: 'Payroll record not found' });
        }
        res.status(200).json(payroll);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payroll record', error });
    }
};

// Update a payroll record by ID
export const updatePayroll = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payrollData = req.body;
        const updatedPayroll = await Payroll.findByIdAndUpdate(id, payrollData, { new: true });
        if (!updatedPayroll) {
            return res.status(404).json({ message: 'Payroll record not found' });
        }
        res.status(200).json(updatedPayroll);
    } catch (error) {
        res.status(500).json({ message: 'Error updating payroll record', error });
    }
};

// Delete a payroll record by ID
export const deletePayroll = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedPayroll = await Payroll.findByIdAndDelete(id);
        if (!deletedPayroll) {
            return res.status(404).json({ message: 'Payroll record not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payroll record', error });
    }
};