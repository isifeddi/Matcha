var jwt =  require('jsonwebtoken');
const user = require('../../models/user');
const checkToken = async (token) =>{
    const us = await jwt.verify(token, 'fuckingSecretKey');
    const response = await user.select('GetUserById',us.id);
    if(response)
        return true;
    else
        return false
}   
module.exports  = checkToken;