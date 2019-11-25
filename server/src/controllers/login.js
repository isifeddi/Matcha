const bcrypt = require ('bcrypt');
const common = require('../models/common');
var jwt = require('jsonwebtoken');

Login =  async (req, res, next) => {
    const {username, password} = req.body;
    let get = await  common.getUser('GetUserByUsername',username);
    const data = get[0];
    if(data)
    {
        const payload = {id: data.id, firstname: data.firstname, lastname: data.lastname, username: data.username, email: data.email, confirmed: data.confirmed};
        let token = await jwt.sign({data: payload}, 'fuckingSecretKey');
        bcrypt.compare(password, data.password)
        .then((response) => {
            if (response)
            {
                if(data.confirmed === 1)
                    res.send({isValid : true, token: token});
                else
                    res.send({isValid: false, errorField : 'Please confirm your e-mail'})
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