const express = require("express");
const router = express.Router();
const {signup , signin,requiredSignin } = require("../controller/auth");
const {isRequestValidated,validateSigninRequest, validateSignupRequest} = require("../validators/auth");

router.post("/signin",validateSigninRequest , isRequestValidated , signin);
router.post("/signup",validateSignupRequest ,isRequestValidated, signup);


module.exports = router;