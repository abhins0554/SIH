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
    },
    phone:{
        type:String,
    },
    video:{
        type:String,
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
        longitude: {type: String,},
        latitude: {type: String,},
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