const mongoose = require("mongoose");

//user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        //required: true
    },
    gender: {
        type: String,
        //required: true,
    },
    dob: {
        type: Date,
        //required: true,
    },
    isEmailVerify: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    country: {
        type: String,
        //required: true
    },
    pincode: {
        type: String,
        //required: true
    },
    adhaar_number: {
        type: String,
        //required: true
    },
    adhaar_pic: {
        type: String,
        //required: true
    },
    selfie_pic: {
        type: String,
        //required: true
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    mobile: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    otpEmail: {
        type: String
    },
    otpPassword: {
        type: String
    },
    googleAuth: {
        type: Boolean
    },
    googleId: {
        type: String
    }
});


//user model

const model = mongoose.model('users', userSchema);

//module exports
module.exports = model