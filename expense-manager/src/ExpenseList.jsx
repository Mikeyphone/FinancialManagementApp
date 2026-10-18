// Expense List component to display the list of expenses and the total amount spent.
import React from 'react';

function ExpenseList({ expenses }) {
  // Dynamically calculate the total from the array
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="expense-list-container">
      <h2>Expense History</h2>
      <div className="summary-card">
        <h3>Total Spent: ${total.toFixed(2)}</h3>
      </div>
      
      <ul className="expense-list">
        {expenses.length === 0 && <p>No expenses logged yet.</p>}
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <div className="expense-details">
              <strong>{expense.title}</strong>
              <span className="category-badge">{expense.category}</span>
            </div>
            <span className="expense-amount">${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;