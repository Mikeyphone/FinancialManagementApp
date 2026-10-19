// Main App component for the Expense Manager application.
import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [theme, setTheme] = useState('light');

  // Meaningful UseState hook: Managing the primary dynamic array
  const [expenses, setExpenses] = useState([]);

  // Function passed down as a prop to update state
  const addExpense = (newExpense) => {
    setExpenses([...expenses, { id: Date.now(), ...newExpense }]);
  };

return (
  <div className="app-wrapper" data-theme={theme}>
    <div className="app-container">
      <Header 
        currentView={currentView} 
        setView={setCurrentView} 
        theme={theme} 
        setTheme={setTheme} 
        />
      
      <main className="main-content">
        {/* Conditional Multi-View Layout rendering */}
        {currentView === 'about' ? (
          <About />
        ) : (
          <div className="dashboard-grid">
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} />
          </div>
        )}
      </main>
</div>
  </div>
);
}

export default App;