const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        {/* Dynamic CSS class based on priority */}
        <span className={`badge priority-${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </span>
      </div>
      <p className="ticket-email">Submitted by: {ticket.email}</p>
    </div>
  );
};

export default TicketCard;