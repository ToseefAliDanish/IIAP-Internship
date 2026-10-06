import ProfileCard from "./ProfileCard";

// Simulated Backend Database Fetch
async function fetchPersonnel() {
  // Artificial 3-second delay to clearly demonstrate the Streaming UI (loading.tsx)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  return [
    { id: "EMP-01", name: "Toseef Ali Danish", role: "Engineering Intern" },
    { id: "EMP-02", name: "Rizwan Ullah", role: "Project Manager" },
    { id: "EMP-03", name: "Saqib Ullah", role: "Systems Analyst" },
  ];
}

export default async function PersonnelDirectory() {
  // Direct Server-Side Fetch (No useEffect needed)
  const personnelData = await fetchPersonnel();

  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>IIAP Active Personnel</h2>
      <p style={{ color: "gray", marginBottom: "20px" }}>
        This list was fetched securely on the Node.js server.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {personnelData.map((person) => (
          // Injecting the Client Component into our Server Component
          <ProfileCard key={person.id} person={person} />
        ))}
      </div>
    </main>
  );
}