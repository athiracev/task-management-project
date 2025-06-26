const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const dotenv = require('dotenv')

const authRoutes = require('./routes/auth')
const taskRoutes = require('./routes/task')


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth',authRoutes)
app.use('/api/tasks',taskRoutes)

// connect DB & start server

// Use port from environment, fallback to 5000
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error(err));