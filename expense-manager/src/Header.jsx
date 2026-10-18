//Layot and design of the header component.
import React from 'react';

function Header({ currentView, setView }) {
  return (
    <header className="header">
      <h1>Personal Expense Manager</h1>
      <nav>
        <button
          className={currentView === 'dashboard' ? 'active' : ''}
          onClick={() => setView('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={currentView === 'about' ? 'active' : ''}
          onClick={() => setView('about')}
        >
          About
        </button>
      </nav>
    </header>
  );
}

export default Header;