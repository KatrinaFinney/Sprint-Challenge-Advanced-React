import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  return (
    <nav className="navbar" data-testid="nav-bar">
      <h1>Women's World Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
