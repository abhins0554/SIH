const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const multer = require("multer");
const bodyParser = require('body-parser');

const firebaseRouter = require("./router/firebaseRouter");
const userRouter = require("./router/userRoute");
const eventRoute = require("./router/eventRoute");
const newsRoute = require('./router/newsRoute');
const attractionRoute = require('./router/attractionRoute');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));
app.use("/upload", express.static("upload"));

app.use("/firebase", firebaseRouter);
app.use("/user", userRouter);
app.use("/event",eventRoute);
app.use('/news',newsRoute);
app.use('/attraction',attractionRoute);

app.get('/test',(req,res)=>{
  res.send("Network Working !");
})

// app.post("/api/v1/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     console.log("No file upload");
//     res.send("error");
//   } else {
//     console.log(req.file.filename);
//     let imgSrc = "http://127.0.0.1:5000/upload/" + req.file.filename;
//     res.send(imgSrc);
//   }
// });

app.listen(5000, (req, res) => {
  console.log("NodeJS Server Started");
  mongoose.connect(process.env.DB_URL)
  .then(()=>console.log("MongoDB Connection Successful"))
  .catch((error)=>console.log("error",error))
});
