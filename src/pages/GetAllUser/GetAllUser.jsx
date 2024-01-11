// GetAllUsers.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GetAllUser.css"
import useGet from "../../hooks/useAllGet";
import useDelete from "../../hooks/useDelete";
const GetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const { data } = useGet("https://659a84a0652b843dea53a3f9.mockapi.io/Crud")
    const { deleteMessage, deleteData } = useDelete("https://659a84a0652b843dea53a3f9.mockapi.io/Crud", users, setUsers)
    useEffect(() => {
        setUsers(data);
        console.log(users);
    }, [data]);

    return (
        <div id="getAllUsersContainer" style={ { position: "relative" } }>
            { deleteMessage && <p className="delete-message">{ deleteMessage }</p> }

            <h2>All Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Gender</th>
                        <th>IsEmployed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user) => (
                        <tr key={ user.id }>
                            <td>{ user.Name }</td>
                            <td>{ user.Email }</td>
                            <td>{ user.Country }</td>
                            <td>{ user.Gender }</td>
                            <td>{ user.isEmployeed ? "Yes" : "No" }</td>

                            <td>
                                <Link to={ `/user/${user.id}` }>View</Link>

                                { " | " }
                                <Link to={ `/edit-user/${user.id}` }>Edit</Link>
                                { " | " }

                                <button onClick={ () => deleteData(user.id, "User is deleted!") }>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>

        </div>
    );
};

export default GetAllUsers;
