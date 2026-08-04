import UserCard from './UserCard';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Team Directory</h1>
      
      <div className="card-grid">

        <UserCard 
          name="Toseef Ali Danish" 
          role="Senior Engineer" 
          isPro={true} 
          isActive={true} 
        />

   
        <UserCard 
          name="Zahoor" 
          role="Project Manager" 
          isPro={false} 
          isActive={false} 
        />

        <UserCard 
          name="New Intern" 
          isActive={true} 
        />
      </div>
    </div>
  );
};

export default App;