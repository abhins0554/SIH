const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    //console.log(token)
    if (token == null) {
      res.sendStatus(401);
      res.end();
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET_LOGIN, (err, obj) => {
      console.log(err);
      if (err) {
        res.sendStatus(403);
        res.end();
        return;
      }
      req.tokenObject = obj;
      console.log(obj);
      next();
    });
  } catch (err) {
      console.log(err);
  }
}
module.exports = authenticateToken;