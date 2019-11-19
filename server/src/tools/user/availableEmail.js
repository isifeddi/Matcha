const common = require('../../models/common');


availableEmail = async (req, res) => {

    const {email} = req.body;
  await common.getUser('GetUserByEmail',email)
  .then((response) => {
   if(response[0])
        res.send(false);
    else
       res.send(true);
  }).catch((error) => {
        console.log(error);
    });

};

module.exports = availableEmail;