const mongoose = require("mongoose");

const attractionModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    personalImage:{
        pI1: {type: String, required: true},
        pI2: {type: String, required: true},
    },
    location: {
        longitude: {type: String, required: true},
        latitude: {type: String, required: true},
    },
    createdOn:{
        type:Date,
        default:Date.now(),
    },
    updatedOn:{
        type:Date,
        default:Date.now(),
    },
});



const model = mongoose.model('user', attractionModel);
module.exports = model;