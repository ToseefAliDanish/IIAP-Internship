import TicketForm from './components/TicketForm';
import './App.css';

const App = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Helpdesk Dashboard</h1>
      </header>
      
      <main className="main-content">
      
        <TicketForm />
      </main>
    </div>
  );
};

export default App;