// Here weare difining the schema for the employee model and exporting it as a model.
const mongoose = require('mongoose');
const { home } = require('nodemon/lib/utils');

// Define the schema for the employee model
const employeeSchema = new mongoose.Schema({
 name: {type: String, required: true},
 email: {type: String, required: true},
 age: {type: Number, required: true},
 hobbies: [{type: String, required: true}],
 department: {
   type: mongoose.Schema.Types.ObjectId, 
   ref: 'Department',
   required: true
 }
});
// Export the model
module.exports = mongoose.model('Employee', employeeSchema);