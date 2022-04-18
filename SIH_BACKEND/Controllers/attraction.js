const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const multer = require("multer");
const attractionModel = require("../Models/AttractionModel");
const otpGenerator = require("otp-generator");

exports.createAttraction = async (req, res) => {
  const attraction = new attractionModel({
    name: req.body.name,
    description: req.body.description,
    videoLink: req.body.videoLink,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    images: req.body.images,
    category: req.body.category,
    phone_number: req.body.phone_number,
    email: req.body.email,
    website: req.body.website,
  });
  if (
    attraction.name &&
    attraction.description &&
    attraction.videoLink &&
    attraction.longitude &&
    attraction.latitude &&
    attraction.images &&
    attraction.category &&
    attraction.phone_number &&
    attraction.email &&
    attraction.website
  ) {
    await attraction.save((err, result) => {
      if (err) {
        return res.json({
          code: 400,
          error: err,
        });
      } else {
        return res.json({
          code: 200,
          message: "Create Sucessfully",
        });
      }
    });
  } else {
    console.log("Please fill the details");
    res.status(400).send({
      message: "Please fill all the details",
      code: 400,
    });
  }
};

exports.getAttractionByCategory = async (req, res) => {
  attractionModel.find(
    { category: req.body.category },
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
};