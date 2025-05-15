import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onTaskUpdated }) => {
  const toggleComplete = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      ...task,
      isCompleted: !task.isCompleted
    });
    onTaskUpdated();
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    onTaskUpdated();
  };

  return (
    <div>
      <input type="checkbox" checked={task.isCompleted} onChange={toggleComplete} />
      <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
