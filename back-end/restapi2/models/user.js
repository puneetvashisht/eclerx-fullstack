const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
// create a schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        // validation on email
        unique: true,
        match: [/@gmail.com$/, "Please add a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: 6
    }
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

UserSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

// create model from schema
const User = mongoose.model('User', UserSchema)

module.exports = User;
