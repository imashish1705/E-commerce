const express = require("express");
const router = express.Router();
const {addCategory,getCategories} = require("../controller/category");
const {requiredSignin,adminMiddleware} = require("../common-middleware/index");

const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/category/create",requiredSignin,upload.single("categoryImage"),addCategory);
router.get("/category/getCategories",getCategories);
module.exports = router;