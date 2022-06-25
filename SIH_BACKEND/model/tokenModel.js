const mongoose = require("mongoose");

const tokenModel = mongoose.Schema({
    token: {
        type: String,
    },
});

const model = mongoose.model('token', tokenModel);
module.exports = model;