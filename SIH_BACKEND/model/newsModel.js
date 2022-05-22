const mongoose = require("mongoose");

const newsModel = mongoose.Schema({
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
    createdOn:{
        type:Date,
        default:Date.now(),
    },
    updatedOn:{
        type:Date,
        default:Date.now(),
    },
});

const model = mongoose.model('news', newsModel);
module.exports = model;