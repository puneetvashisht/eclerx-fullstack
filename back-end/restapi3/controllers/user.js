const User = require('../models/user')
const crypto = require('crypto');


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
exports.forgotPassword = async(req, res, next) => {

    // user by email,
    const user = await User.findOne({email: req.body.email})

    if(!user){
        return next();
    }
    
    const resetToken = await user.generateResetToken();
    console.log('Reset token is ', resetToken);
    await user.save({validateBeforeSave: false});
    
    // localhost:5000/api/v1/users/password/reset/<resetToken>

    // send email to user .. with link concat reset password



    res.json({
        resetToken
    })
 
 }
exports.resetPassword = async(req, res, next) => {


    const resetPasswordToken = crypto.createHash("sha256")
    .update(req.params.token).digest("hex");

    console.log(req.params.token);
    console.log(resetPasswordToken);

    // user by email,
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt : Date.now()}
    })

    console.log(req.body.password);
    console.log(user);

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    // update usre with password and empty reset fields
    await user.save();

    res.json({success: true})
 
 }


exports.uploadProfilePic = async(req, res, next) => {

    console.log(" Inside upload profile pic ", req.id);

    if(req.files && Object.keys(req.files).length !== 0){

        console.log("req.files" , req.files)
        // uploaded move to directory

        const uploadedFile = req.files.uploadFile;

        console.log(uploadedFile)
        console.log(__dirname);

        const uploadPath = '/Users/puneet/work/trainings/eclerx-fullstack/back-end/restapi3/uploads/' + req.id + '.png';

        console.log(uploadPath);
        // Saving file

        uploadedFile.mv(uploadPath, function(err){
            if(err){
                console.log(err);
                res.send("Failed!!!")
            }else{
                res.send("Successfully Uploaded")
            }
        })
    }

    else{
        res.send("No File to upload !!")
    }

    
 
 }
exports.downloadProfilePic = async(req, res, next) => {

    console.log(" Inside upload profile pic ", req.id);

    res.download('/Users/puneet/work/trainings/eclerx-fullstack/back-end/restapi3/uploads/' + req.id + '.png')

    
 
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


 exports.getAllUsers = async(req, res, next) => {
        res.status(200).json(res.advancedQueryResult) 
 }