const express = require("express");
const app = express();
const router = express.Router();
const validateToken = require("../Middleware/userValidation");
const controller = require("../Controllers/attraction");


router.get("/createAttraction", controller.createAttraction);
router.get("/getAttractionByCategory", controller.getAttractionByCategory);


module.exports = router;