const bcrypt = require ('bcrypt');
const common = require('../models/common');

Login =  async (req, res, next) => {
    const {username, password} = req.body;
    let get = await  common.getUser('GetUserByUsername',username);
    if(get[0])
    {
        dbPass = get[0].password
        console.log(dbPass)
        bcrypt.compare(password, dbPass)
        .then((response) => {
            if (response)
            {
                res.send({isValid: true, error: null, userData: get[0]});
            }
            else
            {
                res.send({isValid: false, error: 'Incorrect password'});
            }
        })
        .catch(err => console.log(err))
    }
    else
        res.send({isValid: false, error: 'User not found'});
}

module.exports = Login;