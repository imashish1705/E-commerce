const express = require("express");
const router = express.Router();
const {signup , signin} = require("../../controller/admin/auth");

const {isRequestValidated,validateSigninRequest, validateSignupRequest} = require("../../validators/auth");

router.post("/admin/signin",validateSigninRequest , isRequestValidated , signin);
router.post("/admin/signup",validateSignupRequest ,isRequestValidated, signup);

module.exports = router;