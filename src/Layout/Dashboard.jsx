
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="main-content-inner">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
