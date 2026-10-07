"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { issueDatabase } from "./db";

// Zod Schema for the Create form
const issueSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
});

// CREATE ACTION
export async function createIssue(formData: FormData) {
  // Artificial delay to demonstrate the pending UI state
  await new Promise((resolve) => setTimeout(resolve, 800));

  const rawData = { title: formData.get("title") };
  const validated = issueSchema.safeParse(rawData);

  if (!validated.success) {
    console.error("Zod Validation Failed:", validated.error.flatten());
    return; // Silently abort if validation fails (in production, return an error message)
  }

  issueDatabase.push({
    id: `ISSUE-${Math.floor(Math.random() * 900) + 100}`,
    title: validated.data.title,
    status: "Open",
  });

  // Instantly sync the UI
  revalidatePath("/day3-fresh");
}

// UPDATE ACTION
export async function resolveIssue(formData: FormData) {
  // Extract the hidden ID passed by the update form
  const targetId = formData.get("issueId");
  
  // Find and update the record in our mock database
  const issue = issueDatabase.find(i => i.id === targetId);
  if (issue) {
    issue.status = "Resolved";
  }

  // Instantly sync the UI
  revalidatePath("/day3-fresh");
}