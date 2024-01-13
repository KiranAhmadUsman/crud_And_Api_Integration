
import React from 'react';
import { useUser } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isAuthenticated, logout } = useUser();
    const navigate = useNavigate()
    const handleLogOut = () => {
        logout()
        if (isAuthenticated) {
            navigate("/dashboard")
        }
        else {
            navigate("/login")
        }
    }

    return (
        <div className="bg-gray-300 p-4 flex justify-end dark:bg-[#14213d]">
            <button onClick={ handleLogOut } className="bg-red-500 text-white py-2 px-4 rounded dark:bg-[#e5e5e5] dark:text-black">Logout</button>
        </div>
    );
};

export default Navbar;
