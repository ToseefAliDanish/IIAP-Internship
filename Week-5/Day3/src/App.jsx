import { useState } from 'react';
import TicketForm from './components/TicketForm';
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
        <h1>Helpdesk Dashboard</h1>
        
        <p>Active Tickets: {tickets.length}</p> 
      </header>
      
      <main className="main-content">
        {/* 3. WIRING: We pass the function down to the form as a prop */}
        <TicketForm onAddTicket={handleAddTicket} />

        <div className="ticket-preview">
          <h3>Recent Submissions</h3>
          {tickets.length === 0 && <p>No tickets submitted yet.</p>}
          
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id}>
                <strong>{ticket.title}</strong> - {ticket.priority} Priority 
                <br/> <small>Submitted by: {ticket.email}</small>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;