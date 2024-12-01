import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminSidebar from "../components/dashboard/AdminSidebar";
import Navbar from "../components/dashboard/Navbar";
import AdminSummary from "../components/dashboard/AdminSummary";
import { Outlet } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
  // const {user,loading} = useAuth()
  const { user } = useAuth();
  console.log(user);
  // const navigate = useNavigate()
  // if(loading){
  //     return <div><h2 className='text-2xl'>Loading...</h2></div>
  // }
  // if(!user){
  //     navigate("/login")
  // }
  return (
    <div className="flex">
      {/* <h2>Admin dashboard:{user?.name}</h2> */}
      {/* <h2>Admin dashboard:</h2> */}
      <AdminSidebar></AdminSidebar>
      <div className="flex-1 ml-72 bg-gray-100 h-screen">
        <Navbar></Navbar>
        {/* <AdminSummary></AdminSummary> */}
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashBoard;
