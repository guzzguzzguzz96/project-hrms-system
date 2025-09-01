export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  dateOfJoining: Date;
}

export interface Payroll {
  id: string;
  employeeId: string;
  salary: number;
  bonus: number;
  deductions: number;
  payDate: Date;
}

export interface Attendance {
  id: string;
  employeeId: string;
  date: Date;
  status: 'present' | 'absent' | 'leave';
}

export interface CreateEmployeeDTO {
  name: string;
  email: string;
  position: string;
  department: string;
  dateOfJoining: Date;
}

export interface UpdateEmployeeDTO {
  name?: string;
  email?: string;
  position?: string;
  department?: string;
}

export interface CreatePayrollDTO {
  employeeId: string;
  salary: number;
  bonus?: number;
  deductions?: number;
  payDate: Date;
}

export interface CreateAttendanceDTO {
  employeeId: string;
  date: Date;
  status: 'present' | 'absent' | 'leave';
}