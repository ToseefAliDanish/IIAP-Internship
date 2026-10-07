import { db } from "../../db";
import { updateTask } from "../../actions";
import SubmitBtn from "../SubmitBtn";
import { notFound } from "next/navigation";

// Next.js 15+ requires params to be awaited
export default async function EditTask({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const task = db.find(t => t.id === resolvedParams.id);
  
  if (!task) {
    notFound(); // Triggers the custom 404 page if ID is invalid
  }

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Edit Task: {task.id}</h2>
      
      <form action={updateTask} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Hidden input passes the ID securely to the backend Action */}
        <input type="hidden" name="id" value={task.id} />
        
        <input name="title" defaultValue={task.title} required style={{ padding: "10px" }} />
        <textarea name="description" defaultValue={task.description} required rows={4} style={{ padding: "10px" }} />
        
        <SubmitBtn label="Save Changes" />
      </form>
    </div>
  );
}