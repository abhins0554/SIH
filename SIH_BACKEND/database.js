const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});
const url = process.env.DB_URL

//connection code

    mongoose.connect(
        url,
        {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true,
            useFindAndModify: false
        }
    )
    .then(()=>console.log("connection successful....."))
    .catch((error)=>console.log(error))
