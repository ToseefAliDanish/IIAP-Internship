"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      style={{
        padding: "10px 16px",
        backgroundColor: pending ? "#9e9e9e" : "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: pending ? "not-allowed" : "pointer",
        fontWeight: "bold"
      }}
    >
      {pending ? "Processing..." : "Submit Issue"}
    </button>
  );
}