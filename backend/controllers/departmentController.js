// controllers/departmentController.js
const Department = require('../models/Department');

exports.getDepartments = async (req, res) => {
  try {
    console.log("Fetching all departments");
    const departments = await Department.find({});
    console.log("Found departments:", departments);
    res.json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).send("Server Error");
  }
};