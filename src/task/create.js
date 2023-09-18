import { useState } from 'react';

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, description);
    } else {
      onCreate(title, description);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <>
      {' '}
      {taskformUpdate ? (
        <div className="task-update col-md-12 p-4 m-2">
          <form className="task-form">
          <div className="form-floating mb-2">
              <input type="text" onChange={handleChange} placeholder="placeholder-text" className="form-control" id="titleID" />
              <label htmlFor="titleID">Title</label>
            </div>
            <div className="form-floating mb-2">
              <textarea className="form-control" onChange={handleTaskChange} placeholder="placeholder-text" id="descriptionID"></textarea>
              <label htmlFor="descriptionID">Description</label>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create col-md-4">
          <form className="task-form p-3">
            <div className="form-floating mb-2">
              <input type="text" value={title} onChange={handleChange} placeholder="placeholder-text" className="form-control" id="titleID" />
              <label htmlFor="titleID">Title</label>
            </div>
            <div className="form-floating mb-2">
              <textarea className="form-control" value={description} onChange={handleTaskChange} placeholder="placeholder-text" id="descriptionID"></textarea>
              <label htmlFor="descriptionID">Description</label>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
