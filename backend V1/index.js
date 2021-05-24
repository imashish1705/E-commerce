const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./src/routes/user");
//environment variable or you can say constants
env.config();

mongoose.connect('mongodb://localhost:27017/Ecommerce',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
        console.log("DB Connection Failed");
    });

   app.use(express.json());

   //Router
    app.use("/api",userRouter);    //api is prefix of all routes


    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });