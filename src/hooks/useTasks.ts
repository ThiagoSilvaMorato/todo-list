import { delay } from "@/helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "@/models/task";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function useTasks() {
  const [tasksData] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
    }

    setIsLoadingTasks(false);
    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks?.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
