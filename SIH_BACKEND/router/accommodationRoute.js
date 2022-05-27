const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/accommodationController");

const uploadController = require("../controller/userController");

router.post("/createAccommodation",uploadController.upload.fields([
    {name:'accommodationImage',maxCount:1},
]), controller.createAccommodation);

router.get('/fetchAll',controller.fetchAllDetails);
// router.post('/updateEvent',validateToken,controller.updateEvent);
// router.post('/deleteEvent',validateToken,controller.deleteEvent);

module.exports = router;