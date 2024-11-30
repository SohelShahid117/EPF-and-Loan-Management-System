import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    console.log(user)
    if(loading){
       return <div><h2 className='text-2xl'>Loading...</h2></div>
    }
    return user?children:<Navigate to="/login"/>
};

export default PrivateRoute;