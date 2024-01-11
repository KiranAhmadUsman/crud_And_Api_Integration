import React, { useState } from 'react';
import './Form.css';
import usePost from '../../hooks/usePost';
const Form = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Country: '',
        Gender: '',
        isEmployeed: true,
    });
    const { successMessage, postData } = usePost("https://659a84a0652b843dea53a3f9.mockapi.io/Crud")
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'isEmployeed' ? JSON.parse(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };
    return (
        <div className="form-container">
            <label className="form-label">Name:</label>
            <input className="form-input" type="text" name="Name" value={ formData.Name } onChange={ handleChange } required />

            <label className="form-label">Email:</label>
            <input className="form-input" type="email" name="Email" value={ formData.Email } onChange={ handleChange } required />

            <label className="form-label">Country:</label>
            <select className="form-input" name="Country" value={ formData.Country } onChange={ handleChange } required>
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

            <label className="form-label">Gender:</label>
            <select className="form-input" name="Gender" value={ formData.Gender } onChange={ handleChange } required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <label className="form-label">Is Employed:</label>
            <select className="form-input" name="isEmployeed" value={ formData.isEmployeed } onChange={ handleChange } required>
                <option value={ true }>Yes</option>
                <option value={ false }>No</option>
            </select>

            <button className="form-button" onClick={ () => postData(formData, {
                Name: '',
                Email: '',
                Country: '',
                Gender: '',
                isEmployeed: true,
            }, setFormData,
                "Successfully User Created!") }>

                Create User
            </button>

            { successMessage && <p className="success-message">{ successMessage }</p> }
        </div>
    );
};

export default Form;
