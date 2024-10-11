import React from 'react';
import './component.css';

const TaskItem = ({ task, toggleTask, deleteTask, currentTab }) => {
  return (
    <li className={`task-item ${!task.active ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={!task.active}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.name}</span>
      {/* Hiện nút xóa chỉ khi tab hiện tại là 'completed' */}
      {currentTab === 'completed' && !task.active && (
        <button onClick={() => deleteTask(task.id)}>🗑️</button>
      )}
    </li>
  );
};

export default TaskItem;