import React, { useState } from 'react';
import Tabs from './components/Tabs';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState('all');

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, active: true };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const deleteAllCompleted = () => {
    setTasks(tasks.filter(task => task.active));
  };

  const filteredTasks = tasks.filter(task => {
    if (tab === 'active') return task.active;
    if (tab === 'completed') return !task.active;
    return true; 
  });

  return (
    <div className="app">
      <h1>#todo</h1>
      <Tabs currentTab={tab} setTab={setTab} />
      {tab !== 'completed' && <AddTaskForm addTask={addTask} />}
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        currentTab={tab}
      />
      {tab === 'completed' && tasks.some(task => !task.active) && (
        <button className="delete-all-btn" onClick={deleteAllCompleted}>
          Delete All Completed
        </button>
      )}
      
    </div>
  );
};

export default App;
