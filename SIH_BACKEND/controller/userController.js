const userModel = require("../model/userModel");
const multer = require("multer");
const admin = require("firebase-admin");
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./upload");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

exports.upload = multer({ storage: storage });

exports.userSignup = async (req, res) => {
  userModel.find({ email: req?.body?.email }, async (err, result) => {
    if (err) {
      return res.json({
        code: 400,
        message: "Database Fetch Error",
      });
    }
    if (result.length!==0) {
      return res.json({
        code: 400,
        message: "User already register",
      });
    } else {
      const user = new userModel({
        name: req?.body?.name,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
        address: req?.body?.address,
        pincode: req?.body?.pincode,
        city: req?.body?.city,
        state: req?.body?.state,
        country: req?.body?.country,
        personalImage: {
          pI2: "/" + req?.files?.coverImage[0]?.path,
          pI1: "/" + req?.files?.userImage[0]?.path,
        },
        location: {
          longitude: req?.body?.longitude,
          latitude: req?.body?.latitude,
        },
      });

      await user.save((err, result) => {
        if (err) {
          return res.json({
            code: 400,
            error: err,
          });
        } else {
          return res.json({
            code: 200,
            message: "Create Successfully",
          });
        }
      });
    }
  });
};

exports.userLogin = async (req,res) => {
  userModel.find({ email: req?.body?.email }, async (err, result) => {
    if (err) {
      return res.json({
        code: 400,
        message: "Database Fetch Error",
      });
    } else {
      return res.json({
        code: 200,
        data:result,
        message: "Login Successfully",
      });
    }
  })
}

exports.userDataAll = async (req,res) => {
  userModel.find({}, async (err, result) => {
    if (err) {
      return res.json({
        code: 400,
        message: "Database Fetch Error",
      });
    } else {
      return res.json({
        code: 200,
        data:result,
        message: "Login Successfully",
      });
    }
  })
}