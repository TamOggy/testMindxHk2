import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add details"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;