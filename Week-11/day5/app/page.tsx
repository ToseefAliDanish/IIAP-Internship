export default function Home() {
  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      {/* Demonstrates reading public env variables */}
      <h1>Welcome to {process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <p style={{ color: "gray" }}>You must log in to manage your tasks.</p>
      
      {/* Hitting this link triggers the Route Handler to issue a cookie */}
      <a href="/api/auth" style={{ padding: "10px 20px", background: "black", color: "white", textDecoration: "none", borderRadius: "5px" }}>
        Secure Login
      </a>
    </div>
  );
}