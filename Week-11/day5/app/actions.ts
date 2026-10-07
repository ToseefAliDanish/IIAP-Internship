"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "./db";

const taskSchema = z.object({
  title: z.string().min(3, "Title must be 3+ chars"),
  description: z.string().min(5, "Description must be 5+ chars"),
});

// CREATE
export async function createTask(formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network
  const parsed = taskSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (parsed.success) {
    db.push({ id: Date.now().toString(), ...parsed.data });
    revalidatePath("/tasks"); // Update list instantly
  }
}

// UPDATE
export async function updateTask(formData: FormData) {
  await new Promise(resolve => setTimeout(resolve, 800));
  const id = formData.get("id") as string;
  const parsed = taskSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (parsed.success) {
    const task = db.find(t => t.id === id);
    if (task) {
      task.title = parsed.data.title;
      task.description = parsed.data.description;
    }
    revalidatePath("/tasks"); 
    redirect("/tasks"); // Send user back to the list
  }
}