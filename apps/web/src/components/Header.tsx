import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>HR System</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/employees">Employees</a></li>
                    <li><a href="/payroll">Payroll</a></li>
                    <li><a href="/attendance">Attendance</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;