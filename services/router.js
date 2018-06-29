const express				= require('express');
const router				= express.Router();
const cors					= require('cors');
const validator				= require('./validator');
const security				= require('./security');
const users					= require('../controllers/users');

router.route('/auth/users')
	//.options(cors()) // enable pre-flight request for DELETE request
	.get(security.authenticate(), cors(), users.get);	

module.exports = router;