import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/employees');
                setEmployees(response.data);
            } catch (err) {
                setError('Failed to fetch employees');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;