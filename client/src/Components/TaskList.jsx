import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <TaskForm onTaskAdded={loadTasks} />
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onTaskUpdated={loadTasks} />
      ))}
    </div>
  );
};

export default TaskList;
