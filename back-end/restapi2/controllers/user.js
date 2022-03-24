const User = require("../models/user");
const asyncHandler = require('express-async-handler')

exports.signup = asyncHandler( async (req, res) => {
 
    const user = await User.create(req.body);
    const token = user.getSignedJwtToken();

    res.status(201).json({auth: true, token: token});
} )

exports.login = asyncHandler( async (req, res) => {

    const user = await User.findOne({email: req.body.email})
    const token = user.getSignedJwtToken();
    res.status(200).json({auth: true, token: token});
} )

exports.getUsers = asyncHandler( async(req, res) => {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
})

exports.getUser = asyncHandler( async(req, res) => {
    const user = await User.findById(req.params.id)
    console.log(user);
    res.status(200).json(user);
})