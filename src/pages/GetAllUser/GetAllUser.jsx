import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, GetAllData } from "../../Services/UserApi";


const GetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAllData();
            setUsers(data);
        }
        fetchData()
    }, []);

    const handleDelete = async (id) => {
        try {
            const newdata = await deleteUser(id);
            const res = await GetAllData();
            setUsers(res);
            setDeleteMessage("User is deleted!");
            setTimeout(() => {
                setDeleteMessage('');
            }, 1000);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    return (
        <div className="p-[4rem] h-full">
            { deleteMessage && <div className="flex justify-end">
                <p className="flex justify-end text-red-500 bg-red-300 w-max p-2">{ deleteMessage }</p></div> }

            <h2 className="text-2xl mb-4">All Users</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 dark:bg-[#2b2d42]">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Country</th>
                        <th className="py-2 px-4">Gender</th>
                        <th className="py-2 px-4">IsEmployed</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user) => (
                        <tr key={ user.id } className="border-t border-gray-300">
                            <td className="py-2 px-4">{ user.Name }</td>
                            <td className="py-2 px-4">{ user.Email }</td>
                            <td className="py-2 px-4">{ user.Country }</td>
                            <td className="py-2 px-4">{ user.Gender }</td>
                            <td className="py-2 px-4">{ user.isEmployeed ? "Yes" : "No" }</td>
                            <td className="py-2 px-4">
                                <Link
                                    to={ `/dashboard/user/${user.id}` }
                                    className="text-blue-500 hover:underline mr-2"
                                >
                                    View
                                </Link>
                                |
                                <Link
                                    to={ `/dashboard/edit-user/${user.id}` }
                                    className="text-yellow-500 hover:underline mx-2"
                                >
                                    Edit
                                </Link>
                                |
                                <button
                                    onClick={ () => handleDelete(user.id) }
                                    className="text-red-500 hover:underline ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
};

export default GetAllUsers;
