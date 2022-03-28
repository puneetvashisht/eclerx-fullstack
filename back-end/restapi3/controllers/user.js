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