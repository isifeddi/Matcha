const bcrypt = require ('bcrypt');
const common = require('../models/common');
var jwt = require('jsonwebtoken');

Login =  async (req, res, next) => {
    const {username, password} = req.body;
    let get = await  common.getUser('GetUserByUsername',username);
    if(get[0])
    {
        data = get[0];
        let token = await jwt.sign({data: data}, 'ABCDEFG');

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