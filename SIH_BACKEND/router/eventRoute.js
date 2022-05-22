const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/eventController");

const uploadController = require("../controller/userController");

router.post("/createEvent",validateToken,uploadController.upload.fields([
    {name:'eventImage',maxCount:1},
]), controller.createEvent);

router.get('/fetchAll',validateToken,controller.eventAllFetch);
router.post('/updateEvent',validateToken,controller.updateEvent);
router.post('/deleteEvent',validateToken,controller.deleteEvent);

module.exports = router;