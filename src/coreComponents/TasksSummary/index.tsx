import Badge from "@/components/Badge";
import Text from "@/components/Text";
import useTasks from "@/hooks/useTasks";

export default function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className='flex items-center gap-2'>
        <Text variant='body-sm-bold' className='text-gray-300!'>
          Created tasks
        </Text>
        <Badge variant='secondary' loading={isLoadingTasks}>
          {createdTasksCount}
        </Badge>
      </div>

      <div className='flex items-center gap-2'>
        <Text variant='body-sm-bold' className='text-gray-300!'>
          Completed
        </Text>
        <Badge variant='primary' loading={isLoadingTasks}>
          {concludedTasksCount} of {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
