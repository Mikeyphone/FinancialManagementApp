// Main App component for the Expense Manager application.
import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css';

function App() {
  // Meaningful UseState hook: View management flag (No React Router)
  const [currentView, setCurrentView] = useState('dashboard');

  // Used for dark mode toggle
  const [theme, setTheme] = useState('light');

  // Meaningful UseState hook: Managing the primary dynamic array
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Crunch Fitness Membership', amount: 15.00, category: 'Health' },
    { id: 2, title: 'Whataburger Takeout', amount: 12.50, category: 'Food' },
    { id: 3, title: 'Quick Quack Car Wash', amount: 20.00, category: 'Auto' },
    { id: 4, title: 'Camry Hybrid Gas', amount: 35.00, category: 'Auto' }
  ]);

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