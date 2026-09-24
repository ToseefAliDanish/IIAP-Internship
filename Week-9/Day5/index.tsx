import React, { useState, useRef, useEffect } from "react";
import { Request, Response } from "express";

// ==========================================
// 1. SHARED TYPES (Days 1 & 2: Primitives, Enums, Literals, Unions, Intersections)
// ==========================================

export enum Urgency {
  Low = "LOW",
  Critical = "CRITICAL",
}

export type TicketID = string; // Type Alias
export type CoordinateTuple = [number, number]; // Tuple (Lat, Lng)

// Base Interface with Readonly and Optional properties
export interface BaseIssue {
  readonly id: TicketID;
  reportedBy: string;
  urgency: Urgency;
  resolvedAt?: Date; 
}

// Intersections & Discriminated Unions
export type ITIssue = BaseIssue & {
  type: "IT_ISSUE";
  deviceIp: string;
};

export type FacilityIssue = BaseIssue & {
  type: "FACILITY_ISSUE";
  locationCoords: CoordinateTuple;
};

// The Union that the whole app will use
export type IIAPIssue = ITIssue | FacilityIssue;


// ==========================================
// 2. BACKEND: DATABASE & EXPRESS (Days 3 & 4: Generics, Utility Types, Async)
// ==========================================

// Utility Type: The frontend doesn't send the ID; the DB generates it.
export type CreateIssueDTO = Omit<ITIssue, "id" | "type">;

// Generic Database Response
interface DBResponse<T> {
  success: boolean;
  data: T;
  timestamp: number;
}

// Async Database Simulation using Promises and Generics
async function saveIssueToDB(payload: CreateIssueDTO): Promise<DBResponse<IIAPIssue>> {
  return new Promise((resolve) => {
    const newIssue: ITIssue = {
      id: `TKT-${Math.floor(Math.random() * 1000)}`,
      type: "IT_ISSUE",
      ...payload
    };
    
    setTimeout(() => {
      resolve({ success: true, data: newIssue, timestamp: Date.now() });
    }, 500);
  });
}

// Express Controller with Typed Request/Response
export const createIssueController = async (
  req: Request<{}, {}, CreateIssueDTO>,
  res: Response<DBResponse<IIAPIssue> | { error: string }>
) => {
  try {
    const dbResult = await saveIssueToDB(req.body);
    return res.status(201).json(dbResult);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


// ==========================================
// 3. FRONTEND: REACT COMPONENT (Days 2 & 4: Props, Hooks, Events, Narrowing)
// ==========================================

interface DashboardProps {
  systemName: string;
  children?: React.ReactNode;
}

export const IIAPDashboard = ({ systemName, children }: DashboardProps) => {
  // Generic State Hook
  const [issues, setIssues] = useState<IIAPIssue[]>([]);
  
  // Generic Ref Hook for DOM elements
  const ipInputRef = useRef<HTMLInputElement>(null);

  // Form Submission Event
  const handleReportIssue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const ipAddress = ipInputRef.current?.value;
    if (!ipAddress) return;

    // Constructing the mock response directly for the UI
    const mockCreatedIssue: ITIssue = {
      id: `TKT-${Date.now()}`,
      type: "IT_ISSUE",
      reportedBy: "Current User",
      urgency: Urgency.Critical,
      deviceIp: ipAddress
    };

    setIssues([...issues, mockCreatedIssue]);
    if (ipInputRef.current) ipInputRef.current.value = "";
  };

  return (
    <div>
      <h1>{systemName} Dashboard</h1>
      {children}

      <form onSubmit={handleReportIssue}>
        <input ref={ipInputRef} type="text" placeholder="Enter IP Address" />
        <button type="submit">Report IT Issue</button>
      </form>

      <div className="ticket-list">
        {issues.map((issue) => {
          // TYPE NARROWING in the UI based on the Discriminated Union
          if (issue.type === "IT_ISSUE") {
            return (
              <div key={issue.id} style={{ color: "blue" }}>
                [IT] {issue.id} - Ping IP: {issue.deviceIp} (Urgency: {issue.urgency})
              </div>
            );
          } else if (issue.type === "FACILITY_ISSUE") {
            return (
              <div key={issue.id} style={{ color: "green" }}>
                [FACILITY] {issue.id} - Location: {issue.locationCoords.join(", ")}
              </div>
            );
          }
          return null; // Fallback for safety (satisfies TypeScript's 'never' condition)
        })}
      </div>
    </div>
  );
};

console.log("✅ Week 9 Capstone successfully compiled. Full-stack types are perfectly aligned!");