import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  // Local state just for this form
  const [taskTitle, setTaskTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Pass the new data back to the Parent's function
    onAddTask(taskTitle, isUrgent);
    
    // Clear the form
    setTaskTitle("");
    setIsUrgent(false);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="What needs to be done?" 
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required 
      />
      
      <label className="checkbox-label">
        <input 
          type="checkbox" 
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
        />
        High Priority
      </label>
      
      <button type="submit" className="btn-primary">Add Task</button>
    </form>
  );
};

export default TaskForm;