import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGet from "../../hooks/useAllGet";
import useDelete from "../../hooks/useDelete";

const GetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const { data } = useGet("https://659a84a0652b843dea53a3f9.mockapi.io/Crud");
    const { deleteMessage, deleteData } = useDelete("https://659a84a0652b843dea53a3f9.mockapi.io/Crud", users, setUsers);

    useEffect(() => {
        setUsers(data);
    }, [data]);

    return (
        <div className="p-[4rem] h-full">
            { deleteMessage && <p className="text-green-500">{ deleteMessage }</p> }

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
                                    onClick={ () => deleteData(user.id, "User is deleted!") }
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
