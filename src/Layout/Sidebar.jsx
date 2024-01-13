// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeModeContext';

const Sidebar = () => {
    const { ThemeMode, lightMode, darkMode } = useTheme();
    return (
        <div className="flex justify-between flex-col bg-gray-300 p-4 w-64 dark:bg-[#2b2d42] dark:text-white">
            <ul>
                <h2 className="text-2xl mb-4">Dashboard</h2>
                <li><Link to="/dashboard" className="block mb-2">Home</Link></li>
                <li><Link to="/dashboard/users" className="block mb-2">All Users</Link></li>
                <li><Link to="/dashboard/create-user" className="block mb-2">Create User</Link></li>
            </ul>
            <label className="ml-3">
                <input
                    type="checkbox"
                    checked={ ThemeMode === 'dark' }
                    onChange={ ThemeMode === 'dark' ? lightMode : darkMode }
                    className="form-checkbox h-5 w-5 text-green-500"
                />
                <span className={ `ml-2 text-sm ${ThemeMode === "dark" ? 'dark:text-white' : 'text-gray-700'}` }>Dark Theme</span>
            </label>
        </div>
    );
};
export default Sidebar;
