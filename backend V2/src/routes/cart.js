const express = require("express");
const router = express.Router();
const {addCategory,getCategories} = require("../controller/category");
const {requiredSignin,userMiddleware} = require("../common-middleware");
const {addItemToCart} = require("../controller/cart");

router.post("/user/cart/addtocart",requiredSignin,userMiddleware,addItemToCart);
router.get("/category/getCategories",getCategories);
module.exports = router;