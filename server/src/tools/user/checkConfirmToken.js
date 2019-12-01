const common = require('../../models/common');
const crypto = require('crypto');

checkConfirmToken = async (req, res) => {
    
    const token = req.body.token;
    await common.getUser('GetUserByToken',token)
    .then((response) => {
        if(response[0]){
            const verifToken = crypto.randomBytes(64).toString('hex');
            common.UpdateVerifToken(response[0].email, verifToken);
            common.Confirmed(response[0].email);
            res.send('success');
        }
        else
            res.send('error');
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = checkConfirmToken;