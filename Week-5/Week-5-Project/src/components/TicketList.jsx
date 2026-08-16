import TicketCard from './TicketCard';

const TicketList = ({ tickets }) => {
  if (tickets.length === 0) {
    return (
      <div className="empty-state">
        <p>Inbox zero! All systems are operational. 🟢</p>
      </div>
    );
  }

  return (
    <div className="ticket-list">
      <h3>Active Tickets ({tickets.length})</h3>
      <div className="ticket-grid">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;