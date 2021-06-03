
const express = require('express');
const { requiredSignin, adminMiddleware } = require('../../common-middleware');
const { initialData } = require('../../controller/admin/initialData');
const router = express.Router();


router.post('/initialdata', requiredSignin, adminMiddleware, initialData);


module.exports = router;
// const express = require('express');
// const { requiredSignin, adminMiddleware } = require('../../common-middleware');
// const { initialData } = require('../../controller/admin/initialData');
// const router = express.Router();


// router.post('/initialData', initialData);


// module.exports = router;