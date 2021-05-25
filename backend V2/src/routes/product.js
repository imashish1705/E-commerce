const express = require("express");
const router = express.Router();
//const {addCategory,getCategories} = require("../controller/category");
const {requiredSignin,adminMiddleware} = require("../common-middleware");
const {createProduct} = require("../controller/product");
const multer = require("multer");

const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
router.post("/product/create",requiredSignin,adminMiddleware,upload.array("productPicture"),createProduct);

module.exports = router;