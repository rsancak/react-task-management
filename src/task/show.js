import { useState } from 'react';
import TaskCreate from './create';

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedDescription);
  };
  return (
    <div className="task-show col-md-4">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="card p-4 m-2">
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">{task.title}</p>
            <h5 className="card-title">Decription</h5>
            <p className="card-text">{task.description}</p>
            <div className='d-flex justify-content-between'>
              <button className="btn btn-danger" onClick={handleDeleteClick}>
                Delete
              </button>
              <button className='btn btn-warning' onClick={handleEditClick}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
