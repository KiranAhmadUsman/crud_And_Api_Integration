import React, { useState } from 'react';
import Input from '../../Component/Input';
import Label from '../../Component/label';
import Button from '../../Component/Button';
import countryOptions from '../../const/countryArray';
import DropDown from '../../Component/DropDown';
import genderOptions from '../../const/GenderArrat';
import employmentOptions from '../../const/employmentArray';
import CreateUser from '../../Services/CreateUser';

const Form = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Country: '',
        Gender: '',
        isEmployeed: true,
    });
    const [successMessage, setSuccessMessage] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'isEmployeed' ? JSON.parse(value) : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };
    const handleCreateUser = async () => {
        const status = await CreateUser(formData);
        if (status === 201) {
            setSuccessMessage("Successfully User Created!");
            setFormData({
                Name: '',
                Email: '',
                Country: '',
                Gender: '',
                isEmployeed: true
            })
            setTimeout(() => {
                setSuccessMessage("")
            }, 2000);
        }
    }
    return (
        <div className="flex items-center justify-center h-screen mt-8">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#2b2d42]">
                    <Label text="Name" />
                    <Input type="text" name="Name" value={ formData.Name } onChange={ handleChange } />
                    <Label text="Email" />
                    <Input type="email" name="Email" value={ formData.Email } onChange={ handleChange } />
                    <Label text="Country" />
                    <DropDown name="Country" value={ formData.Country } onChange={ handleChange } array={ countryOptions } />
                    <Label text="Country" />
                    <DropDown name="Gender" value={ formData.Gender } onChange={ handleChange } array={ genderOptions } />
                    <Label text="isEmployeed" />
                    <DropDown name="isEmployeed" value={ formData.isEmployeed } onChange={ handleChange } array={ employmentOptions } />
                    <Button text="Create User" onClick={ handleCreateUser } />
                    { successMessage && (
                        <p className="text-green-500 mt-4 bg-green-100 p-2 block dark:bg-green-400 dark:text-white">
                            { successMessage }
                        </p>
                    ) }
                </div></div></div>
    );
};

export default Form;
