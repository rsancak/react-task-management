import TaskShow from './show';

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </>
  );
}

export default TaskList;
