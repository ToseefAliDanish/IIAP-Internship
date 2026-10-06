export default async function TicketDetail({ params }: { params: { id: string } }) {
  // Simulating a database fetch with a 1.5-second delay to trigger loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulating a crash to trigger error.tsx
  if (params.id === "error-test") {
    throw new Error("Database connection failed while fetching this ticket.");
  }

  return (
    <div>
      <h1>Ticket Details: #{params.id}</h1>
      <p>Status: <strong style={{ color: "orange" }}>In Progress</strong></p>
      <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px", marginTop: "20px" }}>
        Reported issue regarding system architecture.
      </div>
    </div>
  );
}