const Employee = require('../models/Employee');
const Department = require('../models/Department');

// Here we are defining the controller functions for the employee model.
exports.listEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to fetch employees." });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();

    // Update the department's employees array
    if (employee.department) {
      await Department.findByIdAndUpdate(employee.department, { $addToSet: { employees: employee._id } }, { new: true });
    }

    res.json(employee);
  } catch (error) {
    console.error("Error saving employee:", error);
    res.status(500).send("Error saving employee");
  }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employeeData = req.body;

  try {
    // Fetch the current employee to check their current department
    const currentEmployee = await Employee.findById(id);
    const oldDepartmentId = currentEmployee.department;

    // Update the employee
    const updatedEmployee = await Employee.findByIdAndUpdate(id, employeeData, { new: true });

    // If the department changed, update both the old and new departments
    if (oldDepartmentId && oldDepartmentId.toString() !== updatedEmployee.department.toString()) {
      await Department.findByIdAndUpdate(oldDepartmentId, { $pull: { employees: updatedEmployee._id } });
      await Department.findByIdAndUpdate(updatedEmployee.department, { $addToSet: { employees: updatedEmployee._id } }, { new: true });
    } else if (!oldDepartmentId) {
      // If there was no old department, simply add to the new department
      await Department.findByIdAndUpdate(updatedEmployee.department, { $addToSet: { employees: updatedEmployee._id } }, { new: true });
    }

    res.json(updatedEmployee);
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send("Server Error");
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({message: 'Employee deleted'});
}
