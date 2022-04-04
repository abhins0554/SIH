//init code

const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
const multer = require("multer");
const userModel = require("./../Models/UserModel");
const otpGenerator = require("otp-generator");

const axios = require("axios");
// const postModel = require("../Models/PostModel");
// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ID,
//   secretAccessKey: process.env.AWS_SECRET,
// });

// exports.loadImageToBuffer = multer({
//   storage: multer.memoryStorage(),
// });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
exports.upload = multer({ storage: storage });

//user registration=======
exports.register = async (req, res) => {
  userModel.find({ email: req.body.email }, async (err, result1) => {
    if (err) {
      return res.json({
        code: 400,
        error: err,
      });
    }
    console.log(result1);
    if (result1.length > 0) {
      return res.json({
        code: 400,
        message: "email already exist",
      });
    } else {
      //signup with google
      if (req.body.googleId) {
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //for email verification
        const otp = otpGenerator.generate(6, {
          digits: true,
          alphabets: false,
          upperCase: false,
          specialChars: false,
        });
        // console.log(otp);
        const user = new userModel({
          name: req.body.name,
          email: req.body.email,
          // password: hashedPassword,
          mobile: req.body.mobile,
          address: req.body.address,
          pincode: req.body.pincode,
          country: req.body.country,
          city: req.body.city,
          state: req.body.state,
          adhaar_number: req.body.adhaar_number,
          createdOn: Date.now(),
          otpEmail: otp.toString(),
          googleId: req.body.googleId,
          googleAuth: true,
          adhaar_pic: req.files["adhaar_pic"][0]["path"],
          selfie_pic: req.files["selfie_pic"][0]["path"],
        });

        if (
          user.name &&
          user.email &&
          // user.password &&
          user.mobile &&
          user.address &&
          user.pincode &&
          user.country &&
          user.adhaar_number &&
          user.googleId
        ) {
          await user.save((err, result) => {
            //check error
            if (err) {
              return res.json({
                code: 400,
                error: err,
              });
            } else {
              userModel.find(
                { email: req.body.email, isBlocked: false, isDeleted: false },
                (err, results) => {
                  if (err) {
                    return res.status(500).send({
                      error: err,
                    });
                  } else {
                    const _id = results[0].id;
                    const _email = results[0].email;
                    const token = jwt.sign(
                      { id: _id, email: _email },
                      process.env.JWT_SECRET_REG
                    );
                    send_mail(req.body.email, otp.toString());
                    return res.status(200).send({
                      data: result,
                      token: token,
                    });
                  }
                }
              );
            }
          });
          // }
        } else {
          console.log("Please fill the details");
          res.status(400).send({
            message: "Please fill all the details",
            code: 400,
          });
        }
      } else {
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //for email verification
        const otp = otpGenerator.generate(6, {
          digits: true,
          alphabets: false,
          upperCase: false,
          specialChars: false,
        });
        console.log(otp);
        const user = new userModel({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          mobile: req.body.mobile,
          address: req.body.address,
          pincode: req.body.pincode,
          country: req.body.country,
          city: req.body.city,
          state: req.body.state,
          adhaar_number: req.body.adhaar_number,
          createdOn: Date.now(),
          otpEmail: otp.toString(),
          googleAuth: false,
          adhaar_pic: req.files["adhaar_pic"][0]["path"],
          selfie_pic: req.files["selfie_pic"][0]["path"],
        });

        if (
          user.name &&
          user.email &&
          user.password &&
          user.mobile &&
          user.address &&
          user.pincode &&
          user.country &&
          user.adhaar_number
        ) {
          await user.save((err, result) => {
            //check error
            if (err) {
              console.log(err);
              return res.json({
                code: 400,
                error: err,
              });
            } else {
              userModel.find(
                { email: req.body.email, isBlocked: false, isDeleted: false },
                (err, results) => {
                  if (err) {
                    console.log(err);
                    return res.status(500).send({
                      error: err,
                    });
                  } else {
                    const _id = results[0].id;
                    const _email = results[0].email;
                    const token = jwt.sign(
                      { id: _id, email: _email },
                      process.env.JWT_SECRET_REG
                    );
                    send_mail(req.body.email, otp.toString());
                    return res.status(200).send({
                      data: result,
                      token: token,
                    });
                  }
                }
              );
            }
          });
          // }
        } else {
          console.log("Please fill the details");
          res.status(400).send({
            message: "Please fill all the details",
            code: 400,
          });
        }
      }
    }
  });
};

//user login======sending otp
exports.userlogin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, googleId} = req.body;

    if(googleId){
      userModel.find(
        { email: email, isDeleted: false, isBlocked: false, googleAuth: true },
        (err, results) => {
          if (err) {
            return res.status(500).send({
              error: err,
            });
          }
          if (
            !results.length
          ) {
            console.log(results);
            res.status(400).send({
              message: "user not found",
            });
          } else {
  
            const id = results[0].id;
            // console.log("jbjh", results[0].id)
            const token = jwt.sign({ id: id }, process.env.JWT_SECRET_LOGIN, {
              expiresIn: process.env.LOGIN_JWT_EXPIRES_IN,
            });
            res.status(200).send({
              message: "Login Successfull", token: token, result: results
            });
  
          }
        }
      );
    }else{
      if (!email || !password) {
        return res.status(400).send({
          message: "Please provide a valid email and password",
        });
      }
  
      userModel.find(
        { email: email, isDeleted: false, isBlocked: false },
        (err, results) => {
          if (err) {
            return res.status(500).send({
              error: err,
            });
          }
          if (
            !results.length ||
            !bcrypt.compareSync(password, results[0].password)
          ) {
            console.log(results);
            res.status(400).send({
              message: "incorrect email or password",
            });
          } else {
  
            const id = results[0].id;
            // console.log("jbjh", results[0].id)
            const token = jwt.sign({ id: id }, process.env.JWT_SECRET_LOGIN, {
              expiresIn: process.env.LOGIN_JWT_EXPIRES_IN,
            });
            res.status(200).send({
              message: "Login Successfull", token: token, result: results
            });
  
          }
        }
      );
    }
    
  } catch (error) {
    console.log(error);
  }
};

//=====list all data from user table=========================================
exports.selectuser = async (req, res) => {
  userModel.find((err, results) => {
    if (err) {
      return res.status(500).send({
        error: err,
      });
    } else {
      res.status(200).send({ message: " Successful", result: results });
    }
  });
};

//to read specific data selected by unique id============================
exports.selectuserbyid = async (req, res) => {
  userModel.findById(req.query.id, (err, results) => {
    if (err) {
      return res.status(500).send({
        error: err,
      });
    } else {
      if (results["isDeleted"] == false && results["isBlocked"] == false) {
        res.status(200).send({ message: " Successful", result: results });
      } else {
        res.status(400).send({ message: " not available", result: results });
      }
    }
  });
};

//==========================user update================================
exports.userupdate = async (req, res) => {
  console.log("Request Recieved for : ", req.body);

  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    state,
    country,
    mobile,
    latitude,
    longitude,
    about,
    hobbies,
  } = req.body;

  const id = req.tokenObject.id;
  console.log(id);
  userModel.findById(id, async (err, results1) => {
    if (err) {
      return res.status(400).send({
        error: err,
      });
    } else {
      if (results1.isDeleted == false && results1.isBlocked == false) {
        userModel.findByIdAndUpdate(
          id,
          {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            gender: gender,
            mobile: mobile,
            city: city,
            state: state,
            country: country,
            latitude: latitude,
            longitude: longitude,
            updatedOn: Date.now(),
            about: about,
            hobbies: hobbies,
          },
          { new: true },
          (error, results) => {
            if (error) {
              return res.status(400).send({
                error: error,
                message: "Updation failed.",
              });
            } else {
              return res.send({
                message: "UPDATED SUCCESSFULLY",
                Result: results,
              });
            }
          }
        );
      } else {
        return res.status(400).send({ message: "user not found" });
      }
    }
  });
};

//================email update===============================================
exports.update_email = async (req, res) => {
  console.log("Request Recieved for : ", req.body);
  const { id, email } = req.body;
  const otp = otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });
  console.log(otp);
  userModel.find({ email: email }, async (error, results1) => {
    if (error) {
      return res.status(500).send({ error: error });
    }

    if (results1.length > 0) {
      return res.status(404).send({
        message: "already registered",
      });
    } else {
      userModel.findById(id, async (error, result2) => {
        if (error) {
          return res.status(500).send({ error: error });
        } else {
          console.log("result", result2);
          if (result2.isDeleted == false && result2.isBlocked == false) {
            await userModel.findByIdAndUpdate(
              id,
              { email: email, otpEmail: otp.toString(), isEmailVerify: false },
              { new: true },
              (error, result3) => {
                if (error) {
                  return res.status(500).send({ error: error });
                } else {
                  console.log("result3", result3);
                  if (!result3) {
                    return res
                      .status(500)
                      .send({ message: "email updation is failed" });
                  }
                  const token = jwt.sign(
                    { id: id },
                    process.env.JWT_SECRET_LOGIN,
                    {
                      expiresIn: process.env.LOGIN_JWT_EXPIRES_IN,
                    }
                  );

                  send_mail(email, otp.toString());
                  console.log("token: " + token);
                  res.status(200).send({
                    message: "Successful",
                    token: token,
                    result: result3,
                  });
                }
              }
            );
          } else {
            return res.status(400).send({ message: "user not found" });
          }
        }
      });
    }
  });
};

//======================forgot password=============================

exports.request_password = async (req, res) => {
  // ask for email
  const email = req.body.email;
  console.log("Request Recieved for : ", req.body);
  userModel.find(
    { email: email, isDeleted: false, isBlocked: false },
    (err, results) => {
      if (err) {
        res.status(404).send(err);
      }
      if (results.length > 0) {
        const _id = results[0].id;
        const _email = results[0].email;
        const token = jwt.sign(
          { id: _id, email: _email },
          process.env.FORGET_PASSWORD
        );
        const otp = otpGenerator.generate(6, {
          digits: true,
          alphabets: false,
          upperCase: false,
          specialChars: false,
        });
        console.log(otp);
        userModel.findOneAndUpdate(
          { email: email, isDeleted: false, isBlocked: false },
          { otpPassword: otp.toString() },
          (err, results2) => {
            if (err) {
              return res.status(500).send({
                message: "Internal Server Error",
              });
            } else {
              let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASS,
                },
              });
              var mailOptions = {
                from: "Maven",
                to: email,
                subject: "request for password reset",
                html:
                  "Hello, " +
                  results[0].firstName +
                  results[0].lastName +
                  "<br> Here is your OTP: " +
                  otp.toString() +
                  "<br> If you did not request this, please ignore this email and your password will remain unchanged.",
              };

              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                  return res.status(400).json(error);
                } else {
                  console.log(
                    "Success! an email with password reset OTP has been sent to you " +
                      info.response
                  );
                  res.status(200).json({
                    data: " an email with password reset OTP has been sent to you",
                    success: true,
                    token: token,
                  });
                }
              });
            }
          }
        );
      }
    }
  );
};

//forgot password verify api for user
exports.forgotPassVerify = async (req, res) => {
  const { otp, email } = req.body;
  userModel.find(
    { email: email, isDeleted: false, isBlocked: false },
    (err, result1) => {
      if (err) {
        return res.status(500).send({
          message: "Internal Server Error",
        });
      }
      console.log(result1);
      // OTP stored in DB
      const realOTP = result1[0].otpPassword;
      console.log(realOTP), console.log(otp);
      if (realOTP == otp) {
        res.send({
          message: "Correct OTP",
        });
      } else {
        console.log("error");
        return res.status(400).send({
          message: "Incorrect OTP",
        });
      }
    }
  );
};

// =============================== Change Password (Forgot Pass) =======================//

exports.changepassword = async (req, res) => {
  const { new_password, confirmpassword, email } = req.body;
  console.log(new_password);
  console.log(confirmpassword);
  console.log(email);
  if (
    new_password &&
    confirmpassword &&
    email &&
    new_password === confirmpassword
  ) {
    const hashedNewPassword = bcrypt.hashSync(new_password, 8);
    console.log(hashedNewPassword);
    userModel.find({ email }, (err, result1) => {
      if (err) {
        return res.status(500).send({
          message: "INTERNAL SERVER ERROR",
        });
      }
      console.log(result1);
      const user_id = result1[0].id;
      userModel.findByIdAndUpdate(
        user_id,
        { password: hashedNewPassword },
        async (err, result2) => {
          if (err) {
            console.log(error);
            return res.status(500).send({
              message: "INTERNAL SERVER ERROR",
            });
          } else {
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
              },
            });

            var mailOptions = {
              from: "Maven",
              to: email,
              subject: "Your password has been changed",
              html:
                "Hello<br>This is a confirmation mail that the password for your Maven account with email  " +
                email +
                "  has been changed.",
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
                return res.status(400).json(error);
              } else {
                console.log(
                  "Success! Your password has been changed" + info.response
                );
                res.status(200).json({
                  data: " 'Success! Your password has been changed.'",
                  success: true,
                });
              }
            });
          }
        }
      );
    });
  } else {
    console.log("error");
    return res.status(400).send({
      message: "please provide valid details",
    });
  }
};

//================================ RESET PASSWORD ======================================//

exports.resetpassword = async (req, res) => {
  console.log("Request Recieved for : ", req.body);

  // Please Check validation for new_password and confirm_new_password in frontend
  const { old_password, new_password } = req.body;

  const id = req.tokenObject.id;
  console.log(id);

  userModel.findById(id, async (err, user) => {
    if (err) {
      return res.status(404).send({
        message: "This account is not registered",
      });
    } else {
      const isMatch = await bcrypt.compare(old_password, user.password);
      if (!isMatch) {
        return res.status(400).send({
          message: "Please enter your correct password",
        });
      } else {
        let hashedNewPassword = await bcrypt.hash(new_password, 8);
        console.log(hashedNewPassword);

        if (old_password && new_password) {
          userModel.findById(id, async (err, result1) => {
            if (err) {
              return res.status(404).send({
                message: "This account is not registered",
              });
            } else {
              if (result1.isDeleted == false && result1.isBlocked == false) {
                userModel.findByIdAndUpdate(
                  id,
                  { password: hashedNewPassword },
                  { new: true },
                  async (err, result2) => {
                    if (err) {
                      return res.status(400).send({
                        message: "This account is not registered",
                      });
                    }
                    return res.send({
                      message: "Password Updated Successfully",
                      newData: result2,
                    });
                  }
                );
              } else {
                return res.send({
                  message: "data not found",
                });
              }
            }
          });
        } else {
          console.log("error");
          return res.status(400).send({
            message: "please provide valid details",
          });
        }
      }
    }
  });
};

//================================Delete User=========================================//

exports.userdelete = async (req, res) => {
  try {
    const id = req.tokenObject.id;
    userModel.findById(id, (err, results) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      const email = results.email;
      userModel.findOneAndUpdate(
        { email: email, isDeleted: false },
        { isDeleted: true },
        { new: true },
        (err, result) => {
          if (err) {
            return res.status(500).send({ error: err });
          } else {
            return res.status(200).send({ newData: result });
          }
        }
      );
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

//=====================email verification=====================================
exports.email_verify = async (req, res) => {
  const { otp, user_id } = req.body;
  if (otp && user_id) {
    userModel.find(
      { _id: user_id, isDeleted: false, isBlocked: false },
      (err, result1) => {
        if (err) {
          return res.status(500).send({
            message: "Internal Server Error",
          });
        }
        if (result1[0].isEmailVerify === false) {
          const ogOTP = result1[0].otpEmail;
          if (ogOTP) {
            const userOTP = otp;
            if (userOTP === ogOTP) {
              userModel.findByIdAndUpdate(
                user_id,
                { $set: { isEmailVerify: true } },
                { new: true },
                (err, result2) => {
                  if (err) {
                    return res.status(500).send({
                      message: "Internal Server Error",
                    });
                  } else {
                    console.log(result2);
                    return res.send({
                      message: "Email Verified Successfully",
                    });
                  }
                }
              );
            } else {
              res.status(401).send({
                message: "Please Enter the correct otp. Access Denied.",
              });
            }
          } else {
            return res.status(400).send({
              message: "something happened",
            });
          }
        } else {
          res.status(400).send({
            message: "email is already verified",
          });
        }
      }
    );
  } else {
    res.status(401).send({
      message: "Please Enter the otp",
    });
  }
};

//change profile pic==

exports.profilePicChange = async (req, res) => {
  const id = req.tokenObject.id;
  console.log("id", id);
  console.log("profile picture file", req.file);

  if (req.file) {
    userModel.findById(id, async (error, results1) => {
      if (error) {
        return res.status(500).send({ message: "INTERNAL SERVER ERROR" });
      } else {
        console.log(results1);
        if (results1.isDeleted == false && results1.isBlocked == false) {
          const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: Date.now() + req.file.originalname,
            Body: req.file.buffer,
            ACL: "public-read",
          };
          s3.upload(params, (error, data) => {
            console.log(error, data);

            if (error) {
              return res.status(500).send(error);
            }
            userModel.findByIdAndUpdate(
              id,
              { profile_picture: data.Location },
              { new: true },
              async (error, results) => {
                if (error) {
                  console.log(error);
                  return res.status(500).send({
                    message: "INTERNAL SERVER ERROR",
                  });
                } else {
                  if (results) {
                    return res.send({
                      message: "profile picture update successful",
                      updated_details: results,
                      result: results["profile_picture"],
                    });
                  }
                }
              }
            );
          });
        } else {
          res.status(400).send({
            error: "data not found",
          });
        }
      }
    });
  } else {
    console.log("error");
    return res.status(400).send({
      message: "please provide valid details",
    });
  }
};

//=====================mail sending function===============================
const send_mail = (email, otp) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  var mailOptions = {
    from: "Uttarakhand",
    to: email,
    subject: "email verification",
    html: "Here is your OTP for email verification: " + otp,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email has been sent", info.response);
    }
  });
};

//sending mail for otp login
const sendLoginOtp = (email, otp) => {
  var transporter = nodemailer.createTransport({
    service: "quickblog.tech",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  var mailOptions = {
    from: "Uttarakhand",
    to: email,
    subject: "Login Otp",
    html: "Here is your OTP for Login: " + otp,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email has been sent", info.response);
    }
  });
};

//=======searcg by username

exports.fetch_data_byUname = async (req, res) => {
  userModel.find(
    { username: { $regex: req.body.uname, $options: "i" } },
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: "internal server error" });
      }
      return res.status(200).send({ result: result });
    }
  );
};

// ============ Fetch Count of Followers , Following and posts.
exports.fetch_count = async (req, res) => {
  const id = req.tokenObject.id;
  if (id) {
    userModel.findById(id, (err, results1) => {
      if (err) {
        return res.status(500).send({
          message: "Internal Server Error",
        });
      }
      console.log(results1);
      const followerCount = results1.followers.length;
      const followingCount = results1.following.length;
      // console.log(`followerCount : ${followerCount}`)
      // console.log(`followingCount : ${followingCount}`)
      postModel.find({ createdBy: id, isDeleted: false }, (err, results2) => {
        if (err) {
          return res.status(500).send({
            message: "Internal Server Error",
          });
        }
        const postsCount = results2.length;
        const allinone = {
          followerCount,
          followingCount,
          postsCount,
        };
        return res.status(200).send({
          message: "Data Successfully Fetched",
          code: 200,
          data: allinone,
        });
      });
    });
  } else {
    console.log("error");
    return res.status(400).send({
      message: "Please Provide valid details",
    });
  }
};

// ============ Fetch Weather with localizations.

exports.fetchWeather = async (req, res) => {
  const { latitude, longitude, language } = req.body;
  if (latitude && longitude && language && id) {
    let locationAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${language}&appid=60a27bac5e46189541a2e929d81cf795`;
    axios.default
      .get(locationAPI)
      .then((response) => {
        // Saving Longitude & Latitude to db
        return res.status(200).send({
          message: "Data Successfully Fetched",
          code: 200,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    return res.status(400).send({
      message: "Please Provide valid details",
    });
  }
};
