const express = require('express');
const { requiredSignin, adminMiddleware } = require('../../common-middleware');
const { initialData } = require('../../controller/admin/initialData');
const router = express.Router();


router.post('/initialData', initialData);


module.exports = router;