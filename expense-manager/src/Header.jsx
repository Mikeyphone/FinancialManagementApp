//Layot and design of the header component.
import React from 'react';

function Header({ currentView, setView, theme, setTheme }) {
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <h1>Personal Expense Manager</h1>
      <nav>
        {/* Your existing navigation buttons */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
    </header>
  );
}

export default Header;