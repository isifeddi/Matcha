const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const availableUsername = require('../tools/user/availableUsername');
const availableEmail = require('../tools/user/availableEmail');
const decodeToken = require('../tools/user/decodeToken');

router.post('/login', Login);
router.post('/register', Register);
router.post('/availableEmail',availableEmail);
router.post('/availableUsername',availableUsername);
router.post('/decodeToken', decodeToken);


module.exports = router;