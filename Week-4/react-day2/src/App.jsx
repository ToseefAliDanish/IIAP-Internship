import { useState } from 'react';
import ToggleButton from './ToggleButton'; // Import our new Child component!
import './App.css';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive); 
  };

  return (
    <div className="app-container">
      <div className="status-card">
        
        
        <h2>System Status: {isActive ? "🟢 ONLINE" : "🔴 OFFLINE"}</h2>
        
        
        <ToggleButton isActive={isActive} onToggle={handleToggle} />
        
      </div>
    </div>
  );
};

export default App;