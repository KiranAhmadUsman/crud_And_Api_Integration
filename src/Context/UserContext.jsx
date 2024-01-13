// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';
export const UserContext = createContext(
    { isAuthenticated: false, login: () => { }, logout: () => { } }
);
export const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = (email, password) => {
        if (email !== "" && password !== "") {
            setIsAuthenticated(true);
        } else {
            console.log("fill the field");
        }
    }
    const logout = () => {
        setIsAuthenticated(false);
    }
    return (
        <UserContext.Provider value={ { isAuthenticated, login, logout } }>
            { children }
        </UserContext.Provider>
    );
};
export const useUser = () => {
    return useContext(UserContext);
};
