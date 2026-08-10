import { useState } from 'react';
import TicketForm from './components/TicketForm';
import './App.css';

const App = () => {
  // 1. MASTER STATE: An array to hold all submitted tickets
  const [tickets, setTickets] = useState([]);

  // 2. THE LIFT FUNCTION: This receives data from the child form
  const handleAddTicket = (newTicketData) => {
    // Create a new object that includes a unique ID for React's 'key' requirement
    const completeTicket = {
      ...newTicketData,
      id: Date.now() 
    };

    // Use the Spread operator to add the new ticket to the TOP of the array
    setTickets([completeTicket, ...tickets]);
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Helpdesk Dashboard</h1>
        {/* Dynamic counter proving our state works! */}
        <p>Active Tickets: {tickets.length}</p> 
      </header>
      
      <main className="main-content">
        {/* 3. WIRING: We pass the function down to the form as a prop */}
        <TicketForm onAddTicket={handleAddTicket} />

        {/* 4. PROOF OF LIFE: A quick map to show the data successfully lifted! */}
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