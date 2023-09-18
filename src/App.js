import TaskCreate from './task/create';
import TaskList from './task/list';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, description) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        description,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, description: updatedDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="text-center">
      <div className='d-flex justify-content-center'>
        <TaskCreate onCreate={createTask} />
      </div>
      <hr/>
      <h3>Task List</h3>
      <div className='d-flex justify-content-center'>
        {tasks.length ?
          <TaskList
            tasks={tasks}
            onDelete={deleteTaskById}
            onUpdate={editTaskById}
          /> :
          <p className='alert alert-warning'>No task entered yet!</p>
        }
      </div>
    </div>
  );
}

export default App;
