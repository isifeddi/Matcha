let loginModel = require('../models/User/Login');


Login = (req, res, next) => {
    const {username, password} = req.body;
    let get = loginModel.getUserByUsername(username);

    res.send({
        message : `welcome ${username}`
    })
}

module.exports = Login;