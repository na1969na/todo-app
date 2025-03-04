export type Status = 'todo' | 'in-progress' | 'done' | 'cancelled';

export type Todo = {
  id: string;
  title: string;
  status: Status;
  due_date: string; // Format: "YYYY-MM-DD"
  created_at: Date;
  updated_at: Date;
  tags: string[];
  assigned_to: string[];
  notes?: string;
};
