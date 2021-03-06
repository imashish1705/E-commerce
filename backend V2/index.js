const express = require("express");
const env = require("dotenv");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin/auth");
const categoryRoutes = require("./src/routes/category");
const productRoutes = require("./src/routes/product");
const cartRoutes = require("./src/routes/cart");
const initialDataRoutes = require("./src/routes//admin/initialData");
const PageRoutes = require("./src/routes//admin/page");
const cors = require("cors");
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
   app.use(express.urlencoded({ extended: true }));
   app.use(cors());
   app.use("/public", express.static(path.join(__dirname, "uploads")));
   //Router
   
    app.use("/api",userRoutes);    //api is prefix of all routes
    app.use("/api",adminRoutes); 
    app.use("/api",categoryRoutes); 
    app.use("/api",productRoutes);
    app.use("/api",cartRoutes);
    app.use("/api",initialDataRoutes);
    app.use("/api",PageRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });