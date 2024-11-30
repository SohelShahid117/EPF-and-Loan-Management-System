import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaCogs, FaMoneyBillWave } from "react-icons/fa";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-72">
      <div className="bg-teal-600 h-16 flex items-center  justify-center">
        <h3 className="text-2xl text-center ml-0">Employee PF & Loan MS</h3>
      </div>
      <div>
        {/* <NavLink/> */}
        <NavLink
          to="/admin-dashboard"
        //   className="flex items-center space-x-4 block py-3 px-4 rounded"
          className={({isActive})=>`${isActive ? "bg-teal-500":" "} flex items-center space-x-4 block py-3 px-4 rounded`}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/employee-dashboard" 
        // className="flex items-center space-x-4 block py-3 px-4 rounded "  
        className={({isActive})=>`${isActive ? "bg-teal-500":" "} flex items-center space-x-4 block py-3 px-4 rounded`}>
          <FaUsers />
          <span>Employees</span>
        </NavLink>
        <NavLink to="/employee-dashboard" 
        // className="flex items-center space-x-4 block py-3 px-4 rounded ">
        className={({isActive})=>`${isActive ? "bg-teal-500":" "} flex items-center space-x-4 block py-3 px-4 rounded`}>
          <FaBuilding />
          <span>Department</span>
        </NavLink>
        <NavLink to="/employee-dashboard" 
        // className="flex items-center space-x-4 block py-3 px-4 rounded "
        className={({isActive})=>`${isActive ? "bg-teal-500":" "} flex items-center space-x-4 block py-3 px-4 rounded`}
        >
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>
        <NavLink to="/employee-dashboard" 
        // className="flex items-center space-x-4 block py-3 px-4 rounded "
        className={({isActive})=>`${isActive ? "bg-teal-500":" "} flex items-center space-x-4 block py-3 px-4 rounded`}
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>
        <NavLink to="/employee-dashboard" 
        // className="flex items-center space-x-4 block py-3 px-4 rounded "
        className={({isActive})=>`${isActive ? "bg-teal-500":" "} flex items-center space-x-4 block py-3 px-4 rounded`}
        >
          <FaCogs />
          <span>Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
