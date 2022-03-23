const express = require('express');
const router = express.Router();
const Course = require('../models/course')


router.get('/', async (req, res, next) => {
    // db and fetch all courses
    let courses = await Course.find();
    res.json(courses);
})

router.get('/:id', async (req, res, next) => {
    // db and fetch all courses
    let course = await Course.findById(req.params.id);
    res.json(course);
})

router.post('/', async (req, res) => {
    // db and insert one course    
    let course = await Course.create(req.body);
    res.status(201).json(course);
})

router.delete('/:id', async (req, res) => {
    // db and insert one course    
    console.log(req.params.id);
    let result = await Course.findByIdAndDelete(req.params.id);
    console.log(result);
    res.json(result);
})

router.patch('/:id', async (req, res) => {
    // db and insert one course    
    console.log(req.params.id);
    let updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedCourse)
})

module.exports = router