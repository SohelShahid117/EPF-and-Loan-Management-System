import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
    const {user,loading} = useAuth()
    console.log(user)
    const navigate = useNavigate()
    if(loading){
        return <div><h2>Loading...</h2></div>
    }
    if(!user){
        navigate("/login")

    }
    return (
        <div>
            <h2>Admin dashboard:{user?.name}</h2>
        </div>
    );
};

export default AdminDashBoard;