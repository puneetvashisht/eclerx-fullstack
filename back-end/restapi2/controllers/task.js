const Task = require("../models/task");
const asyncHandler = require('express-async-handler');
const { query } = require("express");

exports.addTask = asyncHandler( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
})


exports.getTasks = asyncHandler( async(req, res) => {

    // console.log(req.query.select) // title,description
    // let query =  Task.find();
    // if(req.query.select){
    //     let fields = req.query.select.split(',').join(' ')
    //     query = query.select(fields)
    // }

    // if(req.query.sort){
    //     query = query.sort(req.query.sort)
    // }
    // else{
    //     query = query.sort('-createdAt')
    // }
   
    // // const tasks = await Task.find().select(selectStr); // title description
    // // const tasks = await Task.find().sort('-title');
    // // const tasks = await Task.find().skip(2);

    // let tasks = await query;

    console.log('inside .. getTasks');

    console.log(res.advancedQueryResult);
    res.status(200).json(res.advancedQueryResult);
})

exports.getUserTasks = asyncHandler( async(req, res) => {
    const userTasks = await Task.find({user: req.params.userid});
    console.log(userTasks);
    res.status(200).json(userTasks);
})
