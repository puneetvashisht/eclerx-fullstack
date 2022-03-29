const express = require('express');
const { signup, login , uploadProfilePic,downloadProfilePic, getAllUsers, forgotPassword, resetPassword} = require('../controllers/user');
const advancedQuery = require('../middleware/advanced-query');
const { isAuthenticatedUser } = require('../middleware/auth');
const User = require('../models/user');
const { route } = require('./productRoute');
const router = express.Router();

router.route('/')
.get(advancedQuery(User), getAllUsers)

router.route("/register")
.post(signup)

router.route("/login")
    .post(login)

router.route('/profilepic')
.post(isAuthenticatedUser, uploadProfilePic)
.get(isAuthenticatedUser, downloadProfilePic)


router.route('/password/forgot')
.post(forgotPassword)

router.route('/password/reset/:token')
.patch(resetPassword)

module.exports = router