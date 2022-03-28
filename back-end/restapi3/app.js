// exress
const express = require('express');
require('dotenv').config({path: './config/config.env'})
const connectDatabase = require('./config/database');
const app = express();

const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const fileUpload = require('express-fileupload')

console.log(process.env.PORT);

//connect to database
connectDatabase();

app.use(express.json())
app.use(fileUpload())
app.use('/photos', express.static('uploads'))



// app.use("/api/v1", product);
app.use("/api/v1/users", user)


// app.post('/upload', (req, res) => {
//     if(req.files && Object.keys(req.files).length !== 0){

//         console.log("req.files" , req.files)
//         // uploaded move to directory

//         const uploadedFile = req.files.uploadFile;

//         console.log(uploadedFile)

//         const uploadPath = __dirname + "/uploads/" + uploadedFile.name;

//         // Saving file

//         uploadedFile.mv(uploadPath, function(err){
//             if(err){
//                 console.log(err);
//                 res.send("Failed!!!")
//             }else{
//                 res.send("Successfully Uploaded")
//             }
//         })
//     }

//     else{
//         res.send("No File to upload !!")
//     }
// })

app.listen(process.env.PORT, ()=> {
    console.log(`Server isd listening on port ${process.env.PORT}`)
})


//middleware 


//express routes


// express listen port