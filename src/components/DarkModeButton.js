import React from 'react';
import useDarkMode from './hooks/isDarkMode';

import './basicStyles/Data.css'

const DarkModeButton = () => {

    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);

    };
    return (
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >Dark Mode</button>
    )
}

export default DarkModeButton;