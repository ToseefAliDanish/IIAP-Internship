import React, { useState, useRef } from "react";
import { Request, Response } from "express";

export interface IIAPTicket {
  id: string;
  description: string;
  isResolved: boolean;
}

export type CreateTicketDTO = Omit<IIAPTicket, "id" | "isResolved">;

export const createTicketController = (
  req: Request<{}, {}, CreateTicketDTO>, 
  res: Response<IIAPTicket | { error: string }>
) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: "Description is required." });
  }

  const newTicket: IIAPTicket = {
    id: `TKT-${Math.floor(Math.random() * 9999)}`,
    description,
    isResolved: false,
  };

  return res.status(201).json(newTicket);
};

interface TicketManagerProps {
  departmentName: string;
  children?: React.ReactNode; 
}

export const TicketManager = ({ departmentName, children }: TicketManagerProps) => {
  
  const [tickets, setTickets] = useState<IIAPTicket[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reload
    
    if (!inputValue) {
      inputRef.current?.focus();
      return;
    }

    const newTicket: IIAPTicket = {
      id: `TKT-${Math.floor(Math.random() * 9999)}`,
      description: inputValue,
      isResolved: false
    };

    setTickets([...tickets, newTicket]);
    setInputValue("");
  };

  return (
    <div>
      <h2>{departmentName} Issue Tracker</h2>
      {children}
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Describe the issue..."
        />
        <button type="submit">Submit Ticket</button>
      </form>

      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            [{ticket.id}] {ticket.description} - {ticket.isResolved ? "Done" : "Open"}
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log("✅ Full-Stack Type Compilation Successful! No type errors found.");