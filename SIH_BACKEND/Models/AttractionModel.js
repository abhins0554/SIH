const mongoose = require("mongoose");

//user schema
const attractionModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    videoLink: {
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
    category: {
        type: String,
    },
    phone_number: {
        type: String,
    },
    email: {
        type: String
    },
    website: {
        type: String,
        //required: true
    },
});


//user model

const model = mongoose.model('attraction', attractionModel);

//module exports
module.exports = model