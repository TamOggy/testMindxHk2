import React from 'react';
import TaskItem from './TaskItem';
import './component.css'


const TaskList = ({ tasks, toggleTask, deleteTask, currentTab }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          currentTab={currentTab} // Truyền currentTab vào TaskItem
        />
      ))}
    </ul>
  );
};

export default TaskList;