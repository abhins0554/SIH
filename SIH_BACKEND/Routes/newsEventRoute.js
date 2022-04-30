const express = require("express");
const app = express();
const router = express.Router();
const validateToken = require("../Middleware/userValidation");
const controller = require("../Controllers/newsevent");


router.get("/getNewsByCategory", controller.getNewsByCategory);


module.exports = router;