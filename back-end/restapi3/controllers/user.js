const User = require('../models/user')


exports.signup = async(req, res, next) => {

    console.log('creating.. ');
    const user = await User.create(req.body);
 //    res.json(products)
 

    var token = user.getSignedJwtToken()
     res.status(200).json({
         success: true,
         data: {token} 
     })
 
 }

 exports.login = async(req, res, next) => {

    // find user on email,
    const user = await User.findOne({email: req.body.email})

    // verify password against userEntered..User
    let auth = await user.matchPassword(req.body.password);

    if(auth){
        var token = user.getSignedJwtToken()
    }

    res.json({
        success: auth,
        data: {
            token
        }
    })
 
 }