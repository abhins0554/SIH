//init code
const express = require("express");
const app = express();
const cors = require('cors');
const database = require('./database')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoute = require('./Routes/userRoute');

app.use(express.static(__dirname + '/public'));
app.use('/upload', express.static('upload'));

app.use("/user", userRoute);

app.listen(3000, (req, res) => {
    console.log('server is running...');
});