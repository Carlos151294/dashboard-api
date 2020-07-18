const express = require('express');
const checkAuth = require('../middlewares/checkAuth');
const dashboardController = require('../controllers/dashboardCtrl');
const router = express.Router();

router.get('/publications', checkAuth, dashboardController.getPublications);

module.exports = router;
