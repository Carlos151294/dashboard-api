const express = require('express');
const router = express.Router();
const authController = require('../controllers/authCtrl');

router.post('/login', authController.loginUser);

module.exports = router;
