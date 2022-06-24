const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/attractionController");

const uploadController = require("../controller/userController");

router.post("/createAttraction",validateToken,uploadController.upload.fields([
    {name:'attractionImage',maxCount:1},
]), controller.createAttraction);

router.get('/fetchByCategory',controller.attractionByCategory);
router.get('/fetchAll',validateToken,controller.attractionAllFetch);
router.post('/updateAttraction',validateToken,controller.updateAttraction);
router.post('/deleteAttraction',validateToken,controller.deleteAttraction);
router.post('/createOtherAttraction',controller.createOtherAttraction);

module.exports = router;