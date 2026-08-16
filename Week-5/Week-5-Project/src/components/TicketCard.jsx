const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        <span className={`badge priority-${ticket.priority.toLowerCase()}`}>
          {ticket.priority} Priority
        </span>
      </div>
      <p className="ticket-desc">{ticket.description}</p>
      <div className="ticket-footer">
        <span className="ticket-email">From: {ticket.email}</span>
        <span className="ticket-date">Ticket #{ticket.id.toString().slice(-4)}</span>
      </div>
    </div>
  );
};

export default TicketCard;