const express = require("express");
const app = express();
const router = express.Router();
const validateToken = require('../Middleware/userValidation');
const controller = require('../Controllers/user');


router.post('/register',controller.upload.fields([{ name: 'adhaar_pic', maxCount: 1 }, { name: 'selfie_pic', maxCount: 1 }]), controller.register);
router.post('/userlogin', controller.userlogin);
router.get('/selectuser', controller.selectuser);
router.get('/selectuserbyid', controller.selectuserbyid);
router.put('/userupdate', validateToken, controller.userupdate);
router.put('/update_email', controller.update_email);
router.put('/userdelete', validateToken, controller.userdelete);
router.put('/email_verify', controller.email_verify);
router.post('/request_password', controller.request_password);
router.post('/forgotPassVerify', controller.forgotPassVerify);
router.patch('/changepassword' , controller.changepassword)
router.put('/resetpassword', validateToken, controller.resetpassword);
// router.put('/profilePicChange', validateToken, controller.loadImageToBuffer.single('file'), controller.profilePicChange);controller.upload.single('adhaar_pic'), controller.upload.single('selfie_pic'),  

module.exports = router;