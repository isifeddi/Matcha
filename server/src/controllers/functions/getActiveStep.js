const user = require('../../models/user');

getActiveStep = async (req, res) => {
    const email = req.body.email;
    await user.getStep(email)
    .then((response) => {
        res.send({step: response[0].complete});
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = getActiveStep;