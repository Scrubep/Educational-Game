import { useState, useEffect } from 'react';
import './Settings.css';

function Settings() {
    // State for theme preference
    const [darkMode, setDarkMode] = useState(false);

    // Load preferences from localStorage when component mounts
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedDarkMode);
    }, []);

    // Save preferences to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <div className='container settings-container'>
            <h1>Settings</h1>
        </div>
    )
}

export default Settings;