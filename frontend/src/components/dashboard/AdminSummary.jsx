import React from 'react';
import SummaryCard from './SummaryCard';
import { FaUsers, FaBuilding } from "react-icons/fa";

const AdminSummary = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Dashboard Overview</h2>
            <div>
                <SummaryCard icon={<FaUsers />} text="Total Employees" number={13} ></SummaryCard>
                {/* https://youtu.be/Uu8SLGWEzA4?si=tHlp13_GKQclBCR2--->part3-30min done */}
            </div>
        </div>
    );
};

export default AdminSummary;