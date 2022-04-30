const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const multer = require("multer");
const attractionModel = require("../Models/AttractionModel");
const otpGenerator = require("otp-generator");
const axios = require('axios');


exports.getNewsByCategory = async (req, res) => {
    await axios.get(`https://inshortsapi.vercel.app/news?category=${req.body.category}`)
        .then(response => {
            return res.json({
                code: 200,
                message: "Data Found Sucesfully",
                result: response.data,
            });
        })
        .catch(error => {
            return res.json({
                code: 400,
                error1: error,
                error2: error.response,
            });
        })
};