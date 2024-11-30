import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({children,requiredRole}) => {
    const {user,loading} = useAuth()
    if(loading){
        return <div>Loading...</div>
    }
    if(!requiredRole.includes(user.role)){
        <Navigate to="unauthorized"/>
    }
    return user?children:<Navigate to="/login"/>
    // return (
    //     <div>
    //         <h2>Roll Base Route</h2>
    //     </div>
    // );
};

export default RoleBasedRoute;