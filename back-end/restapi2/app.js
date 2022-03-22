const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const colors = require('colors')

// connect to db;
const url = 'mongodb://localhost:27017';
const connnectToDB = async () =>{
    await mongoose.connect(url);
    console.log('connected to db'.green);
}
connnectToDB();


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

app.use(express.json())

app.get('/courses', async(req,res)=>{
// db and fetch all courses
    let courses = await Course.find();
    res.json(courses);
})

app.post('/courses', async(req,res)=>{
// db and insert one course    
    let course = await Course.create(req.body);
    res.status(201).json(course);
})

app.delete('/courses/:id', async(req,res)=>{
    // db and insert one course    
       console.log(req.params.id);
       Course.findByIdAndDelete()
})

app.patch('/courses/:id', async(req,res)=>{
    // db and insert one course    
       console.log(req.params.id);
       Course.findByIdAndUpdate(req.params.id, req.body)
})

app.listen(5000, () => console.log('listening on 5000...'));
