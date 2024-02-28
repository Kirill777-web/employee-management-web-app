// controllers/departmentController.js
const Department = require('../models/Department');

exports.listDepartmentsWithEmployeeNames = async (req, res) => {
  try {
    const departments = await Department.find().populate({
      path: 'employees',
      select: 'name -_id' 
    });
    res.json(departments);
  } catch (error) {
    console.error("Error fetching departments with employee names:", error);
    res.status(500).send("Server Error");
  }
};