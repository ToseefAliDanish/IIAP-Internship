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
        <h1>IT Helpdesk Dashboard</h1>
      </header>
      
      <main className="main-content">
        {/* The Form gets the function to send data UP */}
        <TicketForm onAddTicket={handleAddTicket} />
        
        {/* The List gets the data to send DOM DOWN */}
        <TicketList tickets={tickets} />
      </main>
    </div>
  );
};

export default App;