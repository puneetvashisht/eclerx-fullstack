const express = require('express');
const advancedQuery = require('../middlewares/advanced-query');
const router = express.Router();
const Course = require('../models/course')


router.get('/', advancedQuery(Course), async (req, res, next) => {
    // db and fetch all courses
    // let courses = await Course.find();
    // res.json(courses);
    console.log(res.advancedQueryResult);
    res.status(200).json(res.advancedQueryResult);
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