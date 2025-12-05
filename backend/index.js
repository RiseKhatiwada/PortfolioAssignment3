require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/auth', require('./routes/auth'));
app.use('/projects', require('./routes/projects'));
app.use('/education', require('./routes/education'));
app.use('/contact', require('./routes/contact'));

app.listen(5000, () => console.log("Server running on 5000"));
