import { db } from "../db";
import { createTask } from "../actions";
import SubmitBtn from "./SubmitBtn";
import Link from "next/link";

export default async function TaskList() {
  // Artificial delay to trigger loading.tsx (Day 2 concept)
  await new Promise(resolve => setTimeout(resolve, 1500));

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>IIAP Task Database</h2>
        {/* Securely reading backend variables */}
        <span style={{ color: "green", fontSize: "12px" }}>DB Key: {process.env.SECRET_SYSTEM_KEY}</span>
      </div>

      <form action={createTask} style={{ display: "flex", gap: "10px", marginBottom: "30px", padding: "15px", background: "#f5f5f5", borderRadius: "8px" }}>
        <input name="title" placeholder="Task Title" required style={{ flex: 1, padding: "8px" }} />
        <input name="description" placeholder="Description" required style={{ flex: 2, padding: "8px" }} />
        <SubmitBtn label="Create" />
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {db.map(task => (
          <li key={task.id} style={{ border: "1px solid #ddd", padding: "15px", marginBottom: "10px", borderRadius: "6px" }}>
            <strong>{task.title}</strong>
            <p style={{ margin: "5px 0", color: "gray", fontSize: "14px" }}>{task.description}</p>
            {/* Dynamic Routing Link */}
            <Link href={`/tasks/${task.id}`} style={{ color: "#0070f3", fontSize: "14px" }}>Edit Task →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}