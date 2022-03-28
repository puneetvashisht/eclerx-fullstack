// exress
const express = require('express');
require('dotenv').config({path: './config/config.env'})
const connectDatabase = require('./config/database');
const app = express();

const product = require('./routes/productRoute');
const user = require('./routes/userRoute');


console.log(process.env.PORT);

//connect to database
connectDatabase();

app.use(express.json())


app.use("/api/v1", product);
app.use("/api/v1/users", user)

app.listen(process.env.PORT, ()=> {
    console.log(`Server isd listening on port ${process.env.PORT}`)
})


//middleware 


//express routes


// express listen port