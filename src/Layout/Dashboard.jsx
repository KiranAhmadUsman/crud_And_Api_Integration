
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const Dashboard = () => {
    const { isAuthenticated } = useUser();
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-[#0f0f0f] dark:text-white">
                    { !isAuthenticated ? <Navigate to="/login" /> : <Outlet /> }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
