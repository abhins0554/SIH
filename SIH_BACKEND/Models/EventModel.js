const mongoose = require("mongoose");

//user schema
const eventModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        //required: true
    },
    longitude: {
        type: String,
        //required: true,
    },
    latitude: {
        type: Date,
        //required: true,
    },
    images: {
        type: String,
    },
    deleted : {
        type: String,
    }
});

const model = mongoose.model('event', eventModel);

//module exports
module.exports = model;