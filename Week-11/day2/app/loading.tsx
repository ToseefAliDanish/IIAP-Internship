export default function Loading() {
  const skeletonItems = [1, 2, 3];

  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>IIAP Active Personnel</h2>
      <p style={{ color: "gray", marginBottom: "20px" }}>
        Fetching secure database records...
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {skeletonItems.map((item) => (
          <div key={item} style={{ padding: "15px", border: "1px solid #eee", borderRadius: "8px", height: "70px", backgroundColor: "#f9f9f9", animation: "pulse 1.5s infinite" }}>
            <div style={{ height: "20px", width: "40%", backgroundColor: "#e0e0e0", borderRadius: "4px", marginBottom: "10px" }}></div>
            <div style={{ height: "15px", width: "25%", backgroundColor: "#e0e0e0", borderRadius: "4px" }}></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}