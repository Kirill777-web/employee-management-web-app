const express = require('express');
const router = express.Router();
const {listEmployees, createEmployee, updateEmployee, deleteEmployee} = require('../controllers/employeeController');

//

// Get list of employees
router.get('/', listEmployees);

// POST a new employee
router.post('/', createEmployee);


// PUT update an employee
router.put('/:id', updateEmployee);

// DELETE an employee
router.delete('/:id', deleteEmployee);

module.exports = router;