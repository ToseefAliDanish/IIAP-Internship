const ExpenseItem = ({ name, category, amount }) => {
  return (
    <li className="expense-card">
      <div className="expense-info">
        <h3>{name}</h3>
        <span className="category-badge">{category}</span>
      </div>
      <div className="expense-amount">${Number(amount).toFixed(2)}</div>
    </li>
  );
};

export default ExpenseItem;