import { useState } from 'react';
import TaskCard from './components/TaskCard';
import TaskForm from './Components/TaskForm';
import './App.css';

const App = () => {
  // 1. MASTER STATE
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review React Docs", isCompleted: false, highPriority: true },
    { id: 2, title: "Setup Database", isCompleted: true, highPriority: false }
  ]);
  const [filter, setFilter] = useState("All"); // "All", "Pending", "Completed"

  // 2. EVENT HANDLERS (Passed down to children as Props)
  const addTask = (title, isUrgent) => {
    const newTask = {
      id: Date.now(),
      title: title,
      isCompleted: false,
      highPriority: isUrgent
    };
    // Using the Spread operator to avoid mutating the original state!
    setTasks([...tasks, newTask]); 
  };

  const toggleComplete = (taskId) => {
    // Map creates a new array. If the ID matches, we flip the boolean.
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    // Filter creates a new array without the deleted ID
    const remainingTasks = tasks.filter(task => task.id !== taskId);
    setTasks(remainingTasks);
  };

  // 3. DERIVED STATE (Filtering logic for the UI)
  const displayedTasks = tasks.filter(task => {
    if (filter === "All") return true;
    if (filter === "Pending") return !task.isCompleted;
    if (filter === "Completed") return task.isCompleted;
  });

  // 4. RENDERING THE COMPONENT TREE
  return (
    <div className="app-container">
      <div className="dashboard">
        <header>
          <h1>Project Tasks</h1>
          <p>Total Tasks: {tasks.length}</p>
        </header>

        {/* Composition: Rendering the Form */}
        <TaskForm onAddTask={addTask} />

        {/* Filter Controls */}
        <div className="filter-bar">
          <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
          <button className={filter === "Pending" ? "active" : ""} onClick={() => setFilter("Pending")}>Pending</button>
          <button className={filter === "Completed" ? "active" : ""} onClick={() => setFilter("Completed")}>Completed</button>
        </div>

        {/* Rendering the List using .map() and Keys */}
        <div className="task-list">
          {displayedTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onToggle={toggleComplete} 
              onDelete={deleteTask}
              category="Engineering" // Passing a specific prop to test defaults
            />
          ))}
          
          {displayedTasks.length === 0 && (
            <p className="empty-state">No tasks found for this filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;