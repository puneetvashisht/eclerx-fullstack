const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
        // validation on email
    },
    password: {
        type: String
    }
})

// create model from schema
const User = mongoose.model('User', UserSchema)

module.exports = User;
