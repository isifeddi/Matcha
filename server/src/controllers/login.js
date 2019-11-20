const bcrypt = require ('bcrypt');
const common = require('../models/common');

Login =  async (req, res, next) => {
    const {username, password} = req.body;
    let get = await  common.getUser('GetUserByUsername',username);
    if(get[0])
    {
        data = get[0];
        dbPass = get[0].password
        console.log(dbPass)
        bcrypt.compare(password, dbPass)
        .then((response) => {
            if (response)
            {
                res.send({isValid : true, userData: data});
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