const User = require('../models/user')


exports.signup = async(req, res, next) => {

    console.log('creating.. ');
    const user = await User.create(req.body);
 //    res.json(products)
 
     res.status(200).json({
         success: true,
         data: user 
     })
 
 }

 exports.login = async(req, res, next) => {

    console.log('creating.. ');
//     const user = await User.create(req.body);
//  //    res.json(products)
 
//      res.status(200).json({
//          success: true,
//          data: user 
//      })
 
 }