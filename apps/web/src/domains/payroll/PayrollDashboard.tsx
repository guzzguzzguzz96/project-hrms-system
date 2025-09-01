import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PayrollDashboard: React.FC = () => {
    const [payrollData, setPayrollData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPayrollData = async () => {
            try {
                const response = await axios.get('/api/payroll');
                setPayrollData(response.data);
            } catch (err) {
                setError('Failed to fetch payroll data');
            } finally {
                setLoading(false);
            }
        };

        fetchPayrollData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Payroll Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Salary</th>
                        <th>Bonus</th>
                        <th>Total Compensation</th>
                    </tr>
                </thead>
                <tbody>
                    {payrollData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.employeeName}</td>
                            <td>{item.salary}</td>
                            <td>{item.bonus}</td>
                            <td>{item.totalCompensation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PayrollDashboard;