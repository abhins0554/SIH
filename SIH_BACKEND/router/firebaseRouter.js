const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/firebaseController");

router.get("/verifyUserToken", controller.verifyUserToken);
router.get('/get_allUserDataFirebase',validateToken,controller.get_allUserDataFirebase);
router.get('/get_allUserDataMongoDB',validateToken,controller.get_allUserDataMongoDB);
router.post('/userSignup',validateToken,controller.userSignup);



router.get('/',validateToken,controller.checkValidation);

module.exports = router;