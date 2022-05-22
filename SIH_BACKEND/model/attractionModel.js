const mongoose = require("mongoose");

const attractionModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image :{
        type:String,
        required : true
    },
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    deleted:{
        type:String,
        default:"N",
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

const model = mongoose.model('attraction', attractionModel);
module.exports = model;