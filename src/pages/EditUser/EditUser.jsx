import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUpdate from "../../hooks/useUpdate";
import useOneGet from "../../hooks/useOneGet";
import Input from "../../Component/Input";
import Label from "../../Component/label";
import Button from "../../Component/Button";
import countryOptions from "../../const/countryArray";
import DropDown from "../../Component/DropDown";
import genderOptions from "../../const/GenderArrat";
import employmentOptions from "../../const/employmentArray";

const EditUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Country: "",
        Gender: "",
        isEmployeed: true,
    });
    const [updateMessage, setUpdateMessage] = useState("");
    const navigate = useNavigate();
    const { data } = useOneGet(
        `https://659a84a0652b843dea53a3f9.mockapi.io/Crud/${id}`
    );
    const { updateData } = useUpdate(
        `https://659a84a0652b843dea53a3f9.mockapi.io/Crud/${id}`
    );

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
                setUpdateMessage("User updated successfully!");
                setTimeout(() => {
                    setUpdateMessage("");
                    navigate("/dashboard/users");
                }, 2000);
            } else {
                console.error("Failed to update user.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#2b2d42]">
                    <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>
                    <Label text="Name" />
                    <Input type="text" name="Name" value={ userData.Name } onChange={ handleInputChange } />
                    <Label text="Email" />
                    <Input type="email" name="Email" value={ userData.Email } onChange={ handleInputChange } />
                    <Label text="Country" />
                    <DropDown name="Country" value={ userData.Country } onChange={ handleInputChange } array={ countryOptions } />
                    <Label text="Gender" />
                    <DropDown name="Gender" value={ userData.Gender } onChange={ handleInputChange } array={ genderOptions } />
                    <Label text="Is Employed" />
                    <DropDown name="isEmployeed" value={ userData.isEmployeed } onChange={ handleInputChange } array={ employmentOptions } />
                    <Button onClick={ handleUpdateUser } text="Update User" />
                    { updateMessage && (
                        <p className="text-green-500 text-sm mt-2">{ updateMessage }</p>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default EditUser;
