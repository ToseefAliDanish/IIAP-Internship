import { issueDatabase } from "./db";
import { createIssue, resolveIssue } from "./actions";
import SubmitBtn from "./SubmitBtn";

export default function Day3FreshPage() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif", color: "#333" }}>
      <h2>IIAP Action Center (Create & Update)</h2>
      
      {/* 1. CREATE FORM */}
      <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "30px" }}>
        <h3 style={{ marginTop: 0 }}>Report New Issue</h3>
        <form action={createIssue} style={{ display: "flex", gap: "10px" }}>
          <input 
            type="text" 
            name="title" 
            placeholder="Describe issue (min 5 chars)" 
            required
            style={{ flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
          <SubmitBtn />
        </form>
      </div>

      {/* 2. DATA DISPLAY & UPDATE FORMS */}
      <h3>Active System Database</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {issueDatabase.map((issue) => (
          <div key={issue.id} style={{ padding: "15px", border: "1px solid #eee", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
            
            <div>
              <strong style={{ display: "block" }}>{issue.title}</strong>
              <span style={{ fontSize: "14px", color: issue.status === "Open" ? "orange" : "green" }}>
                Status: {issue.status}
              </span>
            </div>

            {/* UPDATE FORM: Uses a hidden input to pass the ID to the Server Action */}
            {issue.status === "Open" && (
              <form action={resolveIssue}>
                <input type="hidden" name="issueId" value={issue.id} />
                <button type="submit" style={{ padding: "8px 12px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                  Mark Resolved
                </button>
              </form>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}