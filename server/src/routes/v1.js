const express = require('express');
const router = express.Router();

const Register = require('../controllers/register');
const Login = require('../controllers/login');
const CheckIfEx = require('../controllers/checkIfEx');

router.post('/login', Login);
router.post('/register', Register);
router.post('/checkIfEx', CheckIfEx);


module.exports = router;