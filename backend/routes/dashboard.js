const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard');
const auth = require('../middleware/auth');

// Personal details route
router.get('/personal-details', auth, dashboardController.getPersonalDetails);

// Dashboard data route
router.get('/data', auth, dashboardController.getDashboardData);

module.exports = router;