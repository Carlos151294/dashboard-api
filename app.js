const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes');
const environment = require('./config/environment');

const app = express();

app.use(cors({ origin: environment.cors.frontendDevUrl }));
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

module.exports = app;