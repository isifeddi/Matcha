const common = require('../models/common');


CheckIfEx = async (req, res) => {
    const {username, email} = req.body;
    let GetUserByUsername = await  common.getUser('GetUserByUsername',username);
    let GetUserByEmail = await  common.getUser('GetUserByEmail',email);
    let error = {};

    if(GetUserByUsername[0])
    {
        error.username = 'Username already exists'
    }
    if(GetUserByEmail[0])
    {
        error.email = 'Email already exists'
    }
    res.send(error)
};

module.exports = CheckIfEx;