const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
// create a schema
const EmployeeSchema = new Schema({
    name: {
        type: String
    },
    salary: {
        type: Number
    }
})


// create model from schema
const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee;