const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const multer = require("multer");
const eventModel = require("../Models/EventModel");
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


exports.get_all_events = async (req,res) => {
    eventModel.find(
        { deleted: "N" },
        async (err, result) => {
          if (err) {
            return res.json({
              code: 400,
              error: err,
            });
          } else {
            return res.json({
              code: 200,
              message: "Data Found Sucesfully",
              result: result,
            });
          }
        }
      );
}