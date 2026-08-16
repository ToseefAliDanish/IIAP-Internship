import { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const handleAddTicket = (newTicketData) => {
    const completeTicket = {
      ...newTicketData,
      id: Date.now()
    };
    
    setTickets([completeTicket, ...tickets]);
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Enterprise Support Desk</h1>
        <p>Internal IT Ticketing System</p>
      </header>
      
      <main className="main-content">
        <TicketForm onAddTicket={handleAddTicket} />
        <TicketList tickets={tickets} />
      </main>
    </div>
  );
};

export default App;