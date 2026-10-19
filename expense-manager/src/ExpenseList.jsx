// Expense List component to display the list of expenses and the total amount spent.
function ExpenseList({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="expense-list-container">
      <h2>Expense History</h2>
      <div className="summary-card">
        <h3>Total Spent: ${total.toFixed(2)}</h3>
      </div>
      
      <ul className="expense-list">
        {/* Update this line to guide the user */}
        {expenses.length === 0 && (
          <li className="expense-item" style={{ justifyContent: 'center', color: '#7f8c8d', fontStyle: 'italic' }}>
            No expenses logged yet. Use the form to add your first entry!
          </li>
        )}
        
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