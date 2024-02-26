const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  manager: { type: String },
  description: { type: String }
}, { collection: 'departments' });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;