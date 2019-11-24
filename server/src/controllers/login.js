const bcrypt = require ('bcrypt');
const common = require('../models/common');
var jwt = require('jsonwebtoken');

Login =  async (req, res, next) => {
    const {username, password} = req.body;
    let get = await  common.getUser('GetUserByUsername',username);
    const data = get[0];
    if(data)
    {
        const payload = {id: data.id, firstname: data.firstname, lastname: data.lastname, username: data.username, email: data.email};
        let token = await jwt.sign({data: payload}, 'fuckingSecretKey');
        bcrypt.compare(password, data.password)
        .then((response) => {
            if (response)
            {
                res.send({isValid : true, token: token});
            }
            else
            {
                res.send({isValid : false, errorField : 'Password Incorrect'});
            }
        })
        .catch(err => console.log(err))
    }
    else
        res.send({isValid: false, errorField : 'Username Not Found'});
}

module.exports = Login;