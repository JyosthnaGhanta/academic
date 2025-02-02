import './Notion.css';
import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const currentTime = Date.now();

    // Filter out expired tasks (older than 24 hours)
    const validTasks = storedTasks.filter(task => currentTime - task.timestamp < 86400000);
    setTasks(validTasks);

    // Update localStorage with valid tasks
    localStorage.setItem('tasks', JSON.stringify(validTasks));
  }, []);

  const addTask = () => {
    if (taskInput.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    const newTask = { text: taskInput, done: false, timestamp: Date.now() };
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTaskInput('');
  };

  const toggleCheck = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <h2>TO DO LIST</h2>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.done ? 'done' : ''}`}
            onClick={() => toggleCheck(index)}
          >
            <div className={`checkbox ${task.done ? 'checked' : ''}`}></div>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>

      <div className="add-task-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <a href="/dashboard" className="back-btn">Go Back to Dashboard</a>
    </div>
  );
};

export default ToDoList;
