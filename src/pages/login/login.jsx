import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import Input from '../../Component/Input';
import Label from '../../Component/label';
import Button from '../../Component/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, login } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="flex items-center justify-center h-screen dark:bg-black">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#2b2d42] dark:text-white" onSubmit={ handleLogin }>
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <div className="mb-4">
                        <Label text="Email" />
                        <Input type='email' value={ email } onChange={ (e) => setEmail(e.target.value) } name="Email" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-6">
                        <Label text="Password" />
                        <Input type='password' value={ password } onChange={ (e) => setPassword(e.target.value) } name="Password" placeholder='Enter Your Password' />
                    </div>
                    <div className="flex items-center justify-between">
                        <Button type='submit' text="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
