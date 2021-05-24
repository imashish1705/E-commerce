const express = require("express");
const router = express.Router();
const {signup , signin,requiredSignin } = require("../controller/auth");

router.post("/login",signin);
router.post("/signup",signup);

router.post("/profile",requiredSignin,(req,res)=>{
    res.status(200).json({user:"profile"})
})

module.exports = router;