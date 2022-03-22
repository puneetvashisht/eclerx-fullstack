const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')


router.get('/', async (req, res) => {
    // db and fetch all courses
    let employees = await Employee.find();
    res.json(employees);
})
    
router.post('/', async (req, res) => {
    // db and insert one course    
    let employee = await Employee.create(req.body);
    res.status(201).json(employee);
})

router.delete('/:id', async (req, res) => {
    // db and insert one course    
    console.log(req.params.id);
    let result = await Employee.findByIdAndDelete(req.params.id);
    console.log(result);
    res.json(result);
})

router.patch('/:id', async (req, res) => {
    // db and insert one course    
    console.log(req.params.id);
    let updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedEmployee)
})

module.exports = router