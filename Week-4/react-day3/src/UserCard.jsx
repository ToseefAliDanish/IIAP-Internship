const UserCard = ({ name, role = "Guest", isPro, isActive }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
        
        
        {isPro && <span className="badge pro-badge">PRO</span>}
      </div>

      <p className="role-text">{role}</p>

      <div className="status-container">
       

        <span className={isActive ? "status-dot green" : "status-dot red"}></span>
        
     
        <span className="status-text">
            {isActive ? "Currently Active" : "Offline"}
        </span>
      </div>

      <button className="action-btn">
        {isActive ? "Message User" : "Leave Offline Note"}
      </button>
    </div>
  );
};

export default UserCard;