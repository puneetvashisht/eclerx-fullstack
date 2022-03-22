const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
const CourseSchema = new Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    }
})

// create model from schema
const Course = mongoose.model('Course', CourseSchema)

module.exports = Course;
