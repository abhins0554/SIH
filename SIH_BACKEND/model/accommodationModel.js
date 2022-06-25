const mongoose = require("mongoose");

const accommodationModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price :{
        type:String,
        required : true
    },
    image :{
        type:String,
        required : true
    },
    description:{
        type:String,
    },
    facility:{
        acRoom:{type:Boolean,},
        television:{type:Boolean,},
        freeWifi:{type:Boolean,},
        geyser:{type:Boolean,},
        parkingFacility:{type:Boolean,},
        cctv:{type:Boolean,},
        reception:{type:Boolean,},
        security:{type:Boolean,},
        anyTimeCheckIn:{type:Boolean,},
        dailyHouseKeeping:{type:Boolean,},
        fireExtinguisher:{type:Boolean,},
        attachedBathroom:{type:Boolean,},
        publicToilet:{type:Boolean,},
    },
    location:{
        latitude:{type:String},
        longitude:{type:String},
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

const model = mongoose.model('accommodation', accommodationModel);
module.exports = model;