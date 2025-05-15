// File: Backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../Models/task');

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST a new task
router.post('/', async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    completed: req.body.completed || false
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
});

// PUT to update a task
router.put('/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, completed: req.body.completed },
    { new: true }
  );
  res.json(updatedTask);
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
