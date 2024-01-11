// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">All Users</Link></li>
                <li><Link to="/create-user">Create User</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
