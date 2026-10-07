export default function Loading() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif", textAlign: "center", color: "gray" }}>
      <h2>Loading Secure Tasks...</h2>
      <div style={{ height: "100px", background: "#eee", borderRadius: "8px", animation: "pulse 1.5s infinite" }}></div>
    </div>
  );
}