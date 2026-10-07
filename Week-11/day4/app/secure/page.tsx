export default function SecureDashboard() {
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "green" }}>🔒 Secure Zone</h2>
      <p>You bypassed the middleware!</p>
      
      <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
        <p><strong>Public Env Var:</strong> {process.env.NEXT_PUBLIC_SYSTEM_NAME}</p>
        <p><strong>Secret Env Var:</strong> {process.env.SECRET_DB_PASS}</p>
      </div>
    </div>
  );
}