import { useState, useEffect, useRef } from "react";

export default function IIAPLiveWidget() {
  const [time, setTime] = useState(new Date());
  const [refreshCount, setRefreshCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const widgetRef = useRef<HTMLDivElement>(null);
  
  // 3. useRef for mutable values (Storing the timer ID without triggering re-renders)
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Avoiding unnecessary background processing if paused
    if (!isRunning) return;

    timerIdRef.current = setInterval(() => {
      setTime(new Date()); // Updates state every second
    }, 1000);

    // CLEANUP FUNCTION: Stops the timer if the component unmounts OR if `isRunning` changes
    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    };
  }, [isRunning]); // DEPENDENCY ARRAY: Re-run this effect ONLY when `isRunning` changes


  // --- EFFECT 2: Auto-Refresh Tracker (Avoiding Stale Closures) ---
  useEffect(() => {
    const autoRefreshTimer = setInterval(() => {
      
      setRefreshCount((prevCount) => prevCount + 1);

      // DOM MANIPULATION VIA REF: Flashing the border to visually indicate a background refresh
      if (widgetRef.current) {
        widgetRef.current.style.borderColor = "red";
        setTimeout(() => {
          if (widgetRef.current) widgetRef.current.style.borderColor = "#ccc";
        }, 500);
      }
    }, 5000); // Triggers every 5 seconds

    return () => clearInterval(autoRefreshTimer);
  }, []); // Empty array: Setup once on mount


  return (
    <div 
      ref={widgetRef} 
      style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "8px", maxWidth: "400px", fontFamily: "sans-serif" }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}>IIAP Server Status</h2>
      
      <div style={{ marginBottom: "15px" }}>
        <strong>System Time:</strong> {time.toLocaleTimeString()}
      </div>
      
      <div style={{ marginBottom: "15px" }}>
        <strong>Background Syncs:</strong> {refreshCount} 
        <span style={{ fontSize: "12px", color: "gray", marginLeft: "10px" }}>(Updates every 5s)</span>
      </div>

      <button 
        onClick={() => setIsRunning(!isRunning)}
        style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: isRunning ? "#f44336" : "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}
      >
        {isRunning ? "Pause Clock" : "Resume Clock"}
      </button>
    </div>
  );
}