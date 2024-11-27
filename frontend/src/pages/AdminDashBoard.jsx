import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminDashBoard = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div>
            <h2>Admin dashboard:{user?.name}</h2>
        </div>
    );
};

export default AdminDashBoard;