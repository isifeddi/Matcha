const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_c');

router.post('/register', userController.register);

router.get('/testAPI', function(req, res, next) {
    res.send('API isss working properly');
});

module.exports = router;