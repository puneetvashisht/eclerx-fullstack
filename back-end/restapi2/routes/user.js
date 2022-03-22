const express = require('express');
const router = express.Router();
const User = require('../models/user')


// Add the functionality for Password Comparison on Login.


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