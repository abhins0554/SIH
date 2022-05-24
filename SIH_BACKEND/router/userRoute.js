const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/userController");

router.post("/signup",validateToken,controller.upload.fields([
    {name:'userImage',maxCount:1},
    {name:'coverImage',maxCount:1},
]), controller.userSignup);


router.post('/test',controller.getTest);

router.post("/login",validateToken, controller.userLogin);
router.post('/fetchUser',validateToken,controller.userDataAll);

module.exports = router;