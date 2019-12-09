const user = require('../../models/user');
const crypto = require('crypto');

checkConfirmToken = async (req, res) => {
    
    const token = req.body.token;
    await user.getUser('GetUserByToken',token)
    .then((response) => {
        if(response[0]){
            const verifToken = crypto.randomBytes(64).toString('hex');
            user.UpdateVerifToken(response[0].email, verifToken);
            user.Confirmed(response[0].email);
            res.send('success');
        }
        else
            res.send('error');
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = checkConfirmToken;