const common = require('../../models/common');
const crypto = require('crypto');

sendResetEmail = async (req, res) => {

    const {email} = req.body;
    await common.getUser('GetUserByEmail', email)
    .then((response) => {
        if(response[0]){
            common.sendResetEmail(email, response[0].verif_token);
            res.send({sent: true, error: null});
            // const verifToken = crypto.randomBytes(64).toString('hex');
            // common.UpdateVerifToken(response[0].email, verifToken);
        }
        else
            res.send({sent: false, error: 'Email not found'});
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = sendResetEmail;