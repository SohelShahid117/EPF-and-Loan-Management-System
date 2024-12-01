import React from 'react';
import SummaryCard from './SummaryCard';
import { FaUsers, FaBuilding,FaMoneyBillWave, FaFileAlt, FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";

const AdminSummary = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold'>Dashboard Overview</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6'>
                <SummaryCard icon={<FaUsers />} text="Total Employees" number={16} color="bg-teal-600" ></SummaryCard>
                <SummaryCard icon={<FaBuilding />} text="Total Department" number={3} color="bg-yellow-600"></SummaryCard>
                <SummaryCard icon={<FaMoneyBillWave/>} text="Monthly Salary" number="$8000" color="bg-red-600"></SummaryCard>
            </div>

            <div className='mt-12'>
                <h4 className='text-center text-2xl font-bold'>Leave Details</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                    <SummaryCard icon={<FaFileAlt/>} text="Leave Applied" number={5} color="bg-teal-600"></SummaryCard>
                    <SummaryCard icon={<FaCheckCircle/>} text="Leave Approved" number={2} color="bg-green-600"></SummaryCard>
                    <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pending" number={2} color="bg-yellow-600"></SummaryCard>
                    <SummaryCard icon={<FaTimesCircle/>} text="Leave reject" number={1} color="bg-red-600"></SummaryCard>
                </div>
            </div>


        </div>
    );
};

export default AdminSummary;