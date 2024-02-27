const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  name: { type: String, required: true, unique: true },
  manager: { type: String },
  description: { type: String },
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
}, { collection: 'departments' });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;