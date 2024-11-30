import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const {user}=useAuth();
    return (
        <div className='flex justify-between items-center text-white h-16 bg-teal-600'>
            <h2 className='text-xl px-4 py-1'>Welcome : {user?.name}</h2>
            <button className='px-4 py-2 text-xl mr-8 bg-teal-700 hover:bg-teal-800 rounded'>Logout</button>
        </div>
    ); 
};

export default Navbar;