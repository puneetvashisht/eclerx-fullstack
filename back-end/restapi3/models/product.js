const mongoose = require('mongoose')
const User = require('./user')

// schema
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    price: {
        type: Number,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: [true, 'Please enter product category'],
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// model

module.exports = mongoose.model('Product', productSchema)