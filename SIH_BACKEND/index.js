//init code
const express = require("express");
const app = express();
const cors = require('cors');
const database = require('./database')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoute = require('./Routes/userRoute');
const attractionRoute = require('./Routes/attractionRoute')
const newsEventRoute = require('./Routes/newsEventRoute')

app.use(express.static(__dirname + '/public'));
app.use('/upload', express.static('upload'));

app.use("/user", userRoute);
app.use("/attraction", attractionRoute);
app.use("/newsevent", newsEventRoute);

app.listen(5000, (req, res) => {
    console.log('server is running...');
});