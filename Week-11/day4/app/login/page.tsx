export default function Login() {
  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h2>IIAP Public Login Page</h2>
      <p style={{ color: "gray", marginBottom: "20px" }}>
        You must authenticate to access the secure zone.
      </p>
      
      {/* Clicking this link triggers the GET request to our Route Handler */}
      <a 
        href="/api/login" 
        style={{ 
          display: "inline-block", 
          padding: "10px 20px", 
          backgroundColor: "#0070f3", 
          color: "white", 
          textDecoration: "none", 
          borderRadius: "5px",
          fontWeight: "bold"
        }}
      >
        Authenticate via API Route
      </a>
    </div>
  );
}