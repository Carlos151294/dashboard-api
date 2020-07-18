const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

module.exports = app;