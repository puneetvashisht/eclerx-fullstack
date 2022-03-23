const express = require('express');
const router = express.Router();
const User = require('../models/user')

const {authenticateUser} = require('../middlewares/auth')
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

router.post('/signup', async (req, res) => {
    const user = await User.create(req.body);

    const token = user.getSignedJwtToken();

    res.status(201).json({auth: true, token: token});
})

router.post('/login', authenticateUser, async (req, res) => {

    const user = await User.findOne({email: req.body.email})

    const token = user.getSignedJwtToken();

    res.status(200).json({auth: true, token: token});
})



module.exports = router