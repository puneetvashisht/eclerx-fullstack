
const User = require('../models/user')

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

module.exports = authenticateUser;