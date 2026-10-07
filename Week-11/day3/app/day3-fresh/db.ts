export type Issue = { id: string; title: string; status: "Open" | "Resolved" };

export const issueDatabase: Issue[] = [
  { id: "ISSUE-101", title: "Test Server Actions", status: "Open" }
];