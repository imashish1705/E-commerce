const express = require("express");
const router = express.Router();
const {addCategory,getCategories} = require("../controller/category");
const {requiredSignin,userMiddleware} = require("../common-middleware/index");

router.post("/category/create",userMiddleware,requiredSignin,addCategory);
router.get("/category/getCategories",getCategories);
module.exports = router;