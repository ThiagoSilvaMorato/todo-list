import ButtonIcon from "@/components/ButtonIcon";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Text from "@/components/Text";
import TrashIcon from "@/assets/icons/trash.svg?react";
import PencilIcon from "@/assets/icons/pencil.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import Input from "@/components/Input";
import type { TaskItemProps } from "./models";
import { cx } from "class-variance-authority";
import { TaskState } from "@/models/task";
import useTask from "@/hooks/useTask";
import Skeleton from "@/components/Skeleton";

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const { updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateTask(task.id, { title: taskTitle });

    setIsEditing(false);
  }

  function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size='md'>
      {!isEditing ? (
        <div className='flex items-center gap-4'>
          <Checkbox checked={task?.concluded} onChange={handleChangeTaskStatus} loading={loading} />
          {!loading ? (
            <Text
              className={cx("flex-1", {
                "line-through": task?.concluded,
              })}
            >
              {task?.title}
            </Text>
          ) : (
            <Skeleton className='h-6 flex-1' />
          )}
          <div className='flex gap-1'>
            <ButtonIcon
              icon={TrashIcon}
              variant='tertiary'
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant='tertiary'
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveTask} className='flex items-center gap-4'>
            <Input
              className='flex-1'
              onChange={handleChangeTaskTitle}
              value={taskTitle}
              required
              autoFocus
            />
            <div className='flex gap-1'>
              <ButtonIcon
                type='button'
                icon={XIcon}
                variant='secondary'
                onClick={handleExitEditTask}
              />
              <ButtonIcon
                type='submit'
                icon={CheckIcon}
                variant='primary'
                handling={isUpdatingTask}
              />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
