const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const availableUsername = require('../tools/user/availableUsername');
const availableEmail = require('../tools/user/availableEmail');
const decodeToken = require('../tools/user/decodeToken');
const checkConfirmToken = require('../tools/user/checkConfirmToken');
const sendResetEmail = require('../tools/user/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');
const getOptions = require('../tools/user/getOptions');
const createOption = require('../tools/user/createOption');

router.post('/login', Login);
router.post('/register', Register);
router.post('/availableEmail',availableEmail);
router.post('/availableUsername',availableUsername);
router.post('/decodeToken', decodeToken);
router.post('/confirmEmail', checkConfirmToken);
router.post('/sendResetEmail', sendResetEmail);
router.post('/resetPassword', resetPassword);
router.post('/getOptions', getOptions);
router.post('/createOption', createOption);

module.exports = router;