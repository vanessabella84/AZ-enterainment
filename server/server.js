const express = require('express')
const app = express()
const cors = require('cors')
const colores = require('colors')
const connectDB = require('./config/db')
const eventRoutes = require('./routes/eventRoutes')
const userRoutes = require('./routes/userRoutes')
const yoloRoutes = require('./routes/yoloRoutes')
require('dotenv').config()
connectDB();
app.use(cors())

const port = process.env.PORT || 8000;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/user', userRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/yolo', yoloRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
