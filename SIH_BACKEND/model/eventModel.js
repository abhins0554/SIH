const mongoose = require("mongoose");

const eventModel = mongoose.Schema({
    title: {
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

const model = mongoose.model('event', eventModel);
module.exports = model;