import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceTracker: React.FC = () => {
    const [attendanceRecords, setAttendanceRecords] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAttendanceRecords = async () => {
            try {
                const response = await axios.get('/api/attendance');
                setAttendanceRecords(response.data);
            } catch (err) {
                setError('Failed to fetch attendance records');
            } finally {
                setLoading(false);
            }
        };

        fetchAttendanceRecords();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Attendance Tracker</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Employee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record) => (
                        <tr key={record.id}>
                            <td>{record.date}</td>
                            <td>{record.employeeName}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTracker;