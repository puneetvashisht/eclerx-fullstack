const express = require('express');
const { signup, login , uploadProfilePic,downloadProfilePic} = require('../controllers/user');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route("/register")
.post(signup)

router.route("/login")
    .post(login)

router.route('/profilepic')
.post(isAuthenticatedUser, uploadProfilePic)
.get(isAuthenticatedUser, downloadProfilePic)


module.exports = router