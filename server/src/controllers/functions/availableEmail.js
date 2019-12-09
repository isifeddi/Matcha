const user = require('../../models/user');


availableEmail = async (req, res) => {

    const {email} = req.body;
  await user.getUser('GetUserByEmail',email)
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