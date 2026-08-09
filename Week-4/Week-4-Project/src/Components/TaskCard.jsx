// Destructuring props and setting a default fallback for category
const TaskCard = ({ task, onToggle, onDelete, category = "General" }) => {
  return (
    // Conditional Rendering: Adding a "completed" CSS class if true
    <div className={`task-card ${task.isCompleted ? "completed" : ""}`}>
      
      <div className="task-header">
        <div className="title-group">
          <h3>{task.title}</h3>
          
          {/* Conditional Rendering: Only show if highPriority is TRUE */}
          {task.highPriority && <span className="badge urgent-badge">URGENT</span>}
          <span className="badge category-badge">{category}</span>
        </div>
        
        {/* Calling the Parent's delete function and passing this specific task's ID */}
        <button className="btn-delete" onClick={() => onDelete(task.id)}>✕</button>
      </div>

      <div className="task-actions">
        <button 
          className={task.isCompleted ? "btn-undo" : "btn-complete"}
          onClick={() => onToggle(task.id)}
        >
          {task.isCompleted ? "Undo" : "Complete Task"}
        </button>
      </div>

    </div>
  );
};

export default TaskCard;