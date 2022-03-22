const express = require('express');
const router = express.Router();
const User = require('../models/user')


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
    res.json(user);
})

router.post('/login', async (req, res) => {
    // db and insert one course    
   const {email, password} = req.body;

   // find a record with email 
   let user = await User.findOne({email})
   if(!user){
       res.json({auth: false})
   }
   else{
    console.log(`${user}`.yellow);
    // match password
    if(user.password === password){
        res.json({auth: true})
    }
    else{
         res.json({auth: false})
    }
   }

   

   // auth : true

})



module.exports = router