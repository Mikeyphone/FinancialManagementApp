// ExpenseForm component for logging new expenses.
import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  // Meaningful UseState hook: managing structural input field states
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    // Pass data back up to parent
    onAddExpense({
      title: title,
      amount: parseFloat(amount),
      category: category
    });

    // Reset the controlled form
    setTitle('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <div className="form-container">
      <h2>Log New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Bill Miller Lunch"
          />
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Auto">Auto</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;