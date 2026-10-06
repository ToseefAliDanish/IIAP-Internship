import React, { useState } from "react";
import { 
  QueryClient, 
  QueryClientProvider, 
  useQuery, 
  useMutation, 
  useQueryClient 
} from "@tanstack/react-query";

interface Ticket {
  id: string;
  title: string;
}

let mockDatabase: Ticket[] = [
  { id: "1", title: "Fix projector in Room 101" },
  { id: "2", title: "Update server SSL certificates" },
  { id: "3", title: "Replace keyboard in Lab B" },
  { id: "4", title: "Reboot main router" },
  { id: "5", title: "Install new IDEs on student PCs" },
];

// Pagination
const fetchTickets = async (page: number): Promise<Ticket[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * 2;
      const end = start + 2;
      resolve(mockDatabase.slice(start, end));
    }, 1000);
  });
};

const postTicket = async (title: string): Promise<Ticket> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTicket = { id: Math.random().toString(), title };
      mockDatabase.push(newTicket);
      resolve(newTicket);
    }, 1200);
  });
};

// TanStack Query
function TicketList() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  // Fetching & Caching
  const { data: tickets, isPending, isError } = useQuery({
    queryKey: ["tickets", page], 
    queryFn: () => fetchTickets(page),
  });

  // THE MUTATION
  const addTicketMutation = useMutation({
    mutationFn: postTicket,
    
    onMutate: async (newTitle) => {
      await queryClient.cancelQueries({ queryKey: ["tickets", page] });

      const previousTickets = queryClient.getQueryData(["tickets", page]);

      queryClient.setQueryData(["tickets", page], (oldData: Ticket[] = []) => [
        ...oldData, 
        { id: "optimistic-id", title: `${newTitle} (Saving...)` }
      ]);

      return { previousTickets };
    },
    
    onError: (err, newTitle, context) => {
      if (context?.previousTickets) {
        queryClient.setQueryData(["tickets", page], context.previousTickets);
      }
    },
    
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets", page] });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    addTicketMutation.mutate(inputValue);
    setInputValue("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>IIAP Server-Synced Tickets</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="New ticket..." 
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Add Ticket</button>
      </form>

      {isPending && <p style={{ color: "blue" }}>Fetching data from server...</p>}
      {isError && <p style={{ color: "red" }}>Error fetching data!</p>}

      {tickets && (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {tickets.map((ticket) => (
            <li key={ticket.id} style={{ padding: "10px", border: "1px solid #ddd", marginBottom: "5px" }}>
              {ticket.title}
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1 || isPending}>
          Previous Page
        </button>
        <span style={{ margin: "0 15px" }}>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)} disabled={isPending}>
          Next Page
        </button>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TicketList />
    </QueryClientProvider>
  );
}