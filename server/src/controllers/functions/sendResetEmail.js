const user = require('../../models/user');
const crypto = require('crypto');
const EM = require('./email');
sendResetEmail = async (req, res) => {

    const {email} = req.body;
    await user.getUser('GetUserByEmail', email)
    .then((response) => {
        if(response[0]){
            EM.sendResetEmail(email, response[0].verif_token);
            res.send({sent: true, error: null});
            const verifToken = crypto.randomBytes(64).toString('hex');
            user.UpdateVerifToken(response[0].email, verifToken);
        }
        else
            res.send({sent: false, error: 'Email not found'});
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = sendResetEmail;