import type { Task } from "@/models/task";

export interface TaskItemProps {
  task: Task;
  loading?: boolean;
}
