import React, { createContext, useContext, useState, useReducer, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useQuery, keepPreviousData } from "@tanstack/react-query";

const ThemeContext = createContext<"light" | "dark">("light");

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ 
        minHeight: "100vh", padding: "20px", fontFamily: "sans-serif", transition: "0.3s",
        backgroundColor: theme === "light" ? "#f4f4f9" : "#1a1a2e",
        color: theme === "light" ? "#333" : "#e6e6e6"
      }}>
        <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")} style={{ marginBottom: "20px" }}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // Cleanup function prevents stale timers if value changes quickly
    return () => clearTimeout(timer); 
  }, [value, delay]);

  return debouncedValue;
}

const MOCK_DB = Array.from({ length: 45 }, (_, i) => ({
  id: `TKT-${1000 + i}`,
  title: `System issue reported in sector ${String.fromCharCode(65 + (i % 5))}`,
  status: i % 3 === 0 ? "Resolved" : "Open"
}));

const fetchTickets = async (search: string, status: string, page: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = MOCK_DB;
      if (status !== "All") filtered = filtered.filter(t => t.status === status);
      if (search) filtered = filtered.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
      
      const itemsPerPage = 5;
      const start = (page - 1) * itemsPerPage;
      const paginated = filtered.slice(start, start + itemsPerPage);
      
      resolve({ data: paginated, totalPages: Math.ceil(filtered.length / itemsPerPage) });
    }, 800); // 800ms artificial network delay
  });
};

interface FilterState { search: string; status: "All" | "Open" | "Resolved"; page: number; }
type FilterAction = 
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_STATUS"; payload: "All" | "Open" | "Resolved" }
  | { type: "SET_PAGE"; payload: number };

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_SEARCH": return { ...state, search: action.payload, page: 1 }; // Reset to page 1 on new search
    case "SET_STATUS": return { ...state, status: action.payload, page: 1 };
    case "SET_PAGE":   return { ...state, page: action.payload };
    default: return state;
  }
}

function IIAPDashboard() {
  const theme = useContext(ThemeContext);
  
  // A. Complex State Initialization
  const [filters, dispatch] = useReducer(filterReducer, { search: "", status: "All", page: 1 });
  
  // B. Custom Hook (Debounce the rapid search typing by 500ms)
  const debouncedSearch = useDebounce(filters.search, 500);
  
  // C. useRef & useEffect for DOM manipulation (Auto-focus search bar on load)
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const { data: serverResponse, isPending, isFetching } = useQuery<any>({
    queryKey: ["tickets", debouncedSearch, filters.status, filters.page],
    queryFn: () => fetchTickets(debouncedSearch, filters.status, filters.page),
    placeholderData: keepPreviousData, // Keeps old data on screen while fetching the next page
  });

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px", background: theme === "light" ? "#fff" : "#2a2a40", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <h2>IIAP Command Center</h2>
      
      {/* FILTER CONTROLS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search tickets... (debounced)" 
          value={filters.search}
          onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
          style={{ flex: 1, padding: "10px" }}
        />
        <select 
          value={filters.status} 
          onChange={(e) => dispatch({ type: "SET_STATUS", payload: e.target.value as any })}
          style={{ padding: "10px" }}
        >
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* DATA DISPLAY */}
      <div style={{ opacity: isFetching ? 0.5 : 1, transition: "0.2s", minHeight: "300px" }}>
        {isPending ? (
          <p>Loading server data...</p>
        ) : serverResponse?.data.length === 0 ? (
          <p>No tickets found matching criteria.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {serverResponse?.data.map((ticket: any) => (
              <li key={ticket.id} style={{ padding: "15px", borderBottom: `1px solid ${theme === "light" ? "#eee" : "#444"}`, display: "flex", justifyContent: "space-between" }}>
                <span><strong>[{ticket.id}]</strong> {ticket.title}</span>
                <span style={{ color: ticket.status === "Open" ? "orange" : "green" }}>{ticket.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* PAGINATION CONTROLS */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button 
          disabled={filters.page === 1} 
          onClick={() => dispatch({ type: "SET_PAGE", payload: filters.page - 1 })}
          style={{ padding: "8px 16px" }}
        >
          Previous
        </button>
        <span>Page {filters.page} of {serverResponse?.totalPages || 1}</span>
        <button 
          disabled={!serverResponse || filters.page >= serverResponse.totalPages} 
          onClick={() => dispatch({ type: "SET_PAGE", payload: filters.page + 1 })}
          style={{ padding: "8px 16px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <IIAPDashboard />
      </ThemeProvider>
    </QueryClientProvider>
  );
}