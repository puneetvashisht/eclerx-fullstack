const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Course = require('./models/course')
const Employee = require('./models/employee')
const colors = require('colors')

const courseRoute = require('./routes/course')
const employeeRoute = require('./routes/employee')
const taskRoute = require('./routes/task')
const userRoute = require('./routes/user');
const errorhandler = require('./middlewares/errorhandler');


// connect to db;
const url = 'mongodb://localhost:27017/eclerxdb';
const connnectToDB = async () =>{
    await mongoose.connect(url);
    console.log('connected to db'.green);
}
connnectToDB();

// pre middleware 
app.use(cors())
app.use(express.json())


app.use('/courses', courseRoute)
app.use('/employees', employeeRoute)
app.use('/auth', userRoute)
app.use('/tasks', taskRoute)


app.use(errorhandler)

// app.get('/employee', async(req,res)=>{
//     // db and fetch all courses
//         let employees = await Employee.find();
//         res.json(employees);
// })

app.listen(5000, () => console.log('listening on 5000...'));
