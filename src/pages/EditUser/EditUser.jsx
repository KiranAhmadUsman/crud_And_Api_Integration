import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditUser.css"
import useUpdate from "../../hooks/useUpdate";
import useOneGet from "../../hooks/useOneGet";
const EditUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Country: "",
        Gender: "",
        isEmployeed: true,
    });
    const [updateMessage, setUpdateMessage] = useState('');
    const navigate = useNavigate();
    const { data } = useOneGet(`https://659a84a0652b843dea53a3f9.mockapi.io/Crud/${id}`);
    const { updateData } = useUpdate(`https://659a84a0652b843dea53a3f9.mockapi.io/Crud/${id}`);

    useEffect(() => {
        setUserData(data);
    }, [id, data]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: name === "isEmployeed" ? JSON.parse(value) : value,
        }));
    };
    const handleUpdateUser = async () => {
        try {
            const success = await updateData(userData);
            if (success) {
                setUpdateMessage('User updated successfully!');
                setTimeout(() => {
                    setUpdateMessage('');
                    navigate('/users');
                }, 2000);
            } else {
                console.error('Failed to update user.');
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="edit-user-container">
            <h2>Edit User</h2>
            <label>Name:</label>
            <input type="text" name="Name" value={ userData.Name } onChange={ handleInputChange } />

            <label>Email:</label>
            <input type="email" name="Email" value={ userData.Email } onChange={ handleInputChange } />

            <label>Country:</label>
            <select name="Country" value={ userData.Country } onChange={ handleInputChange }>
                <option value="">----------Select Country-----------</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Armenia">Armenia</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Belgium">Belgium</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Japan">Japan</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
            </select>

            <label>Gender:</label>
            <select name="Gender" value={ userData.Gender } onChange={ handleInputChange }>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>


            <label>Is Employed:</label>
            <select name="isEmployeed" value={ userData.isEmployeed } onChange={ handleInputChange }>
                <option value={ true }>Yes</option>
                <option value={ false }>No</option>
            </select>

            <button onClick={ handleUpdateUser }>Update User</button>
            { updateMessage && <p className="success-message">{ updateMessage }</p> }

        </div>
    );
};

export default EditUser;
