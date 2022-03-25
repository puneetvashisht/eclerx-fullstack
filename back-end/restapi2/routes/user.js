const express = require('express');
const router = express.Router();
const User = require('../models/user')
const {signup, login, getUsers, getUser} = require('../controllers/user')

const {authenticateUser, isAuthenticatedUser} = require('../middlewares/auth')
// Missing Pieces
// 1. signup
//     - email validation
//     - unique user
//     - encoding password
//     - jwt token
//     - error handling
// 2. login
//     - decoding and compare
//     - jwt token
//     - error handling

router.post('/signup', signup)

router.post('/login', authenticateUser, login)

router.get('/users', getUsers)

router.get('/users/:id', getUser)



module.exports = router