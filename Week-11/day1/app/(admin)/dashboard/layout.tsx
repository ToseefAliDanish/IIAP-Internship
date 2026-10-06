export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <aside style={{ width: "250px", backgroundColor: "#1e1e2f", color: "white", padding: "20px" }}>
        <h2 style={{ color: "#4CAF50" }}>IIAP Admin</h2>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px", lineHeight: "2.5" }}>
          <li><a href="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</a></li>
          <li><a href="/tickets/101" style={{ color: "white", textDecoration: "none" }}>Ticket #101</a></li>
          <li><a href="/tickets/error-test" style={{ color: "white", textDecoration: "none" }}>Test Error Page</a></li>
        </ul>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1, padding: "40px" }}>
        {children} {/* Pages load inside here */}
      </main>
    </div>
  );
}