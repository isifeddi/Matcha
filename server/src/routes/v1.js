const express = require('express');
const router = express.Router();
const Register = require('../controllers/register');
const Login = require('../controllers/login');
const availableUsername = require('../controllers/functions/availableUsername');
const availableEmail = require('../controllers/functions/availableEmail');
const decodeToken = require('../controllers/functions/decodeToken');
const checkConfirmToken = require('../controllers/functions/checkConfirmToken');
const sendResetEmail = require('../controllers/functions/sendResetEmail');
const resetPassword = require('../controllers/resetPassword');
const getOptions = require('../controllers/functions/getOptions');
const createOption = require('../controllers/functions/createOption');
const getActiveStep = require('../controllers/functions/getActiveStep');
const addInfo = require('../controllers/addInfo')
const getImages = require('../controllers/functions/getImages');
const deleteImages = require('../controllers/functions/delImages');
const setProfilePicture = require ('../controllers/functions/setProfilePicture')
const updateStep = require('../controllers/functions/updateStep');
const getLocation = require('../controllers/functions/getLocation');
const addLocation = require('../controllers/functions/addLocation');
const logout = require('../controllers/functions/logout');
const getUsers = require('../controllers/functions/getUsers');
const editProfile = require('../controllers/editProfile');

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
router.post('/getActiveStep', getActiveStep);
router.post('/addInfo', addInfo);
router.post('/getImages',getImages);
router.post('/deleteImages',deleteImages);
router.post('/setProfilePicture',setProfilePicture);
router.post('/updateStep',updateStep);
router.post('/getLocation', getLocation);
router.post('/addLocation', addLocation);
router.post('/logout', logout);
router.post('/getUsers',getUsers);
router.post('/editProfile', editProfile);

module.exports = router;