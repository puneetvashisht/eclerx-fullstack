// exress
const express = require('express');
require('dotenv').config({path: './config/config.env'})
const connectDatabase = require('./config/database');
const app = express();

const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const fileUpload = require('express-fileupload');
const User = require('./models/user');

console.log(process.env.PORT);

//connect to database
connectDatabase();

app.use(express.json())
app.use(fileUpload())
app.use('/photos', express.static('uploads'))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

  app.get('/user/:userid', async(req, res) => {
    const user = await User.findById(req.params.userid)
    res.render('user', { title:'User Details Page ',  email: user.email, role: user.role })
  })

app.use("/api/v1/products", product);
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