import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await axios.post('http://localhost:5000/api/tasks', { title });
    setTitle('');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
