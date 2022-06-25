const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/userController");
const tokenController = require("../controller/tokenController");

router.post("/signup",validateToken,controller.upload.fields([
    {name:'userImage',maxCount:1},
    {name:'coverImage',maxCount:1},
]), controller.userSignup);


router.post('/test',controller.getTest);

router.post("/login",validateToken, controller.userLogin);
router.post('/fetchUser',validateToken,controller.userDataAll);

router.post('/tokenSave',tokenController.tokenSave)
router.post('/sendNotification',tokenController.sendNotification)

module.exports = router;