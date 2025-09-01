import React from 'react';
import Header from '../components/Header';
import EmployeeList from '../domains/employees/EmployeeList';
import PayrollDashboard from '../domains/payroll/PayrollDashboard';
import AttendanceTracker from '../domains/attendance/AttendanceTracker';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the HR System</h1>
                <EmployeeList />
                <PayrollDashboard />
                <AttendanceTracker />
            </main>
        </div>
    );
};

export default HomePage;