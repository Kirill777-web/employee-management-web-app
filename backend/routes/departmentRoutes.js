const express = require('express');
const router = express.Router();
// Import the controller function
const { listDepartmentsWithEmployeeNames } = require('../controllers/departmentController');

// Use the controller function in your route definition
router.get('/', listDepartmentsWithEmployeeNames);

module.exports = router;
