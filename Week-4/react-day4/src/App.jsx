import { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

const initialExpenses = [
  { id: 1, name: "Server Hosting", category: "Software", amount: 15.00 },
  { id: 2, name: "Client Lunch", category: "Food", amount: 45.50 },
  { id: 3, name: "Train Ticket", category: "Transport", amount: 22.00 },
  { id: 4, name: "Figma License", category: "Software", amount: 12.00 }
];

const App = () => {
  
  const [activeFilter, setActiveFilter] = useState("All");

  
  const expensesToDisplay = activeFilter === "All" 
    ? initialExpenses 
    : initialExpenses.filter((item) => item.category === activeFilter);

  return (
    <div className="app-container">
      <div className="dashboard">
        <h2>Expense Directory</h2>
        
        <div className="filter-controls">
          <button onClick={() => setActiveFilter("All")}>All</button>
          <button onClick={() => setActiveFilter("Food")}>Food</button>
          <button onClick={() => setActiveFilter("Software")}>Software</button>
          <button onClick={() => setActiveFilter("Transport")}>Transport</button>
        </div>

        <ul className="expense-list">
          {
    
            expensesToDisplay.map((item) => (
              <ExpenseItem 
                key={item.id}
                name={item.name}
                category={item.category}
                amount={item.amount}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default App;