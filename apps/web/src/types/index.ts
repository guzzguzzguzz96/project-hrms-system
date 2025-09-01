export type Employee = {
  id: string;
  name: string;
  position: string;
  department: string;
  dateOfJoining: Date;
};

export type Payroll = {
  id: string;
  employeeId: string;
  salary: number;
  bonus: number;
  deductions: number;
  payDate: Date;
};

export type Attendance = {
  id: string;
  employeeId: string;
  date: Date;
  status: 'present' | 'absent' | 'leave';
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
};