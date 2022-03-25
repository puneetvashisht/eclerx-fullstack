const express = require('express');
const router = express.Router();
const User = require('../models/user')
const {addTask, getTasks, getUserTasks} = require('../controllers/task')

const {authenticateUser, isAuthenticatedUser} = require('../middlewares/auth');
const Task = require('../models/task');
const advancedQuery = require('../middlewares/advanced-query');


router.route('/')
.get(advancedQuery(Task), getTasks)
.post(addTask)

router.route('/user/:userid')
.get(getUserTasks)

module.exports = router