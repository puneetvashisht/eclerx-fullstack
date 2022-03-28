const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')

// create a schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        // validation on email
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: 6
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})





// create model from schema
const User = mongoose.model('User', UserSchema)

module.exports = User;


// class Person{
//     constructor(id, name, salary){
//         //fields
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }

//     //methods
//     incrementSalary(){
//         this.salary += 3434;
//     }

// }


// let person1 = new Person(12, 'Ravi', 34343)

