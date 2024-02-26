const Employee = require('../models/Employee');

// Here we are defining the controller functions for the employee model.
exports.listEmployees = async (req, res) => {
  const employees = await Employee.find().populate('department');
  res.json(employees);
}

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving employee");
  }
}

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findByIdAndUpdate(id, req.body , {new: true});
  res.json(employee);
}

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({message: 'Employee deleted'});
}
