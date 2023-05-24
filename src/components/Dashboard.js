import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`dashboard ${theme}`}>
        <h1>Welcome to the Dashboard</h1>

      <button id='btn' onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;