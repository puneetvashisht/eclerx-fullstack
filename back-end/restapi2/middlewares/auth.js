
const User = require('../models/user')
const jwt = require('jsonwebtoken');

const isAuthenticatedUser = async function(req, res, next){
    // extract token for req header
    // console.log(req.headers);
    const token = req.headers['authorization'];
    console.log(token);
    const tokens = token.split(' ');

    // verify tthe token
    try{
        const decodedData = jwt.verify(tokens[1], "p@ssw0rd");
        console.log(decodedData);
        next();
    }
    catch(err){
        console.log('Error caught: ', err)
        res.status(409).send('You are not authorized to access this data');
    }
   


   

}

const authenticateUser = async function(req, res, next){
    const user = await User.findOne({email: req.body.email})
    console.log(user);

    if(user){
        // Match the password
        const isMatch = await user.matchPassword(req.body.password)
        if(isMatch){
            next();
        }else{
            res.status(401).send("Invalid Password")
        }
    }else{
        res.status(404).send("Invalid credentials")
    }
}

module.exports = {authenticateUser,isAuthenticatedUser};