const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./Routes/tasks');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/taskreminder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
