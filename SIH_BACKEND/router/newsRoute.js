const express = require("express");
const router = express.Router();
const validateToken = require("../Middleware/jwtValidation");
const controller = require("../controller/newsController");

const uploadController = require("../controller/userController");

router.post("/createNews",validateToken,uploadController.upload.fields([
    {name:'newsImage',maxCount:1},
]), controller.createNews);

router.get('/fetchAll',validateToken,controller.newsAllFetch);
router.post('/updateNews',validateToken,controller.updateNews);
router.post('/deleteNews',validateToken,controller.deleteNews);

router.get('/test',controller.testNews);

module.exports = router;