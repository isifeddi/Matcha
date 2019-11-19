const common = require('../../models/common');


availableUsername = async (req, res) => {
    const {username} = req.body;
    await common.getUser('GetUserByUsername',username)
    .then((response) => {
        if(response[0])
            res.send(false);
        else
        res.send(true);
    }).catch((error) => {
        console.log(error);
    });

};

module.exports = availableUsername;