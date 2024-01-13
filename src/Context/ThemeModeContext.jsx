import React, { createContext, useContext, useEffect, useState } from 'react';
export const themeContext = createContext(
    { ThemeMode: "light", darkMode: () => { }, lightMode: () => { } }
);
export const ThemeProvider = ({ children }) => {
    const [ThemeMode, setThemeMode] = useState("light");
    useEffect(() => {
        document.querySelector('html').classList.remove('dark', 'light');
        document.querySelector('html').classList.add(ThemeMode)
    }, [ThemeMode]);
    const lightMode = () => {
        setThemeMode("light");
    }
    const darkMode = () => {
        setThemeMode("dark");
    }
    return (
        <themeContext.Provider value={ { ThemeMode, darkMode, lightMode } }>
            { children }
        </themeContext.Provider>
    );
};
export const useTheme = () => {
    return useContext(themeContext);
};
