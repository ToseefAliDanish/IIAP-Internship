"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button 
      disabled={pending} 
      style={{ padding: "10px", background: pending ? "gray" : "#0070f3", color: "white", border: "none", borderRadius: "4px" }}
    >
      {pending ? "Processing..." : label}
    </button>
  );
}