const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Course = require('./models/course')
const Employee = require('./models/employee')
const colors = require('colors')

const courseRoute = require('./routes/course')

// connect to db;
const url = 'mongodb://localhost:27017';
const connnectToDB = async () =>{
    await mongoose.connect(url);
    console.log('connected to db'.green);
}
connnectToDB();

app.use(express.json())
app.use('/courses', courseRoute)

app.get('/employee', async(req,res)=>{
    // db and fetch all courses
        let employees = await Employee.find();
        res.json(employees);
})

app.listen(5000, () => console.log('listening on 5000...'));
