"use client"; // The Boundary Marker

import { useState } from "react";

interface Person {
  id: string;
  name: string;
  role: string;
}

export default function ProfileCard({ person }: { person: Person }) {
  // We can use State here because of the 'use client' directive
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <strong style={{ display: "block", fontSize: "18px" }}>{person.name}</strong>
          <span style={{ color: "#666" }}>{person.role}</span>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ padding: "8px 12px", cursor: "pointer", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "4px" }}
        >
          {isExpanded ? "Hide Details" : "View ID"}
        </button>
      </div>

      {isExpanded && (
        <div style={{ marginTop: "15px", padding: "10px", backgroundColor: "#f0f8ff", borderLeft: "4px solid #0070f3" }}>
          <strong>System ID:</strong> {person.id}
          <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>Clearance level verified. Access granted.</p>
        </div>
      )}
    </div>
  );
}