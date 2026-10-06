"use client"; 

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: "20px", border: "2px solid red", backgroundColor: "#ffe6e6" }}>
      <h2 style={{ color: "red" }}>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>
        Try Again
      </button>
    </div>
  );
}