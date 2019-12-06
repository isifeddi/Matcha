let registerModel = require('../models/User/Register');
const tools = require('../tools/index');
const bcrypt = require ('bcrypt');
const crypto = require('crypto');
const common = require('../models/common');

   Register = async (req, res) => {
   const {firstname, lastname, username, email, password, confirmPassword} = req.body;
   let GetUserByUsername = await  common.getUser('GetUserByUsername',username);
   let GetUserByEmail = await  common.getUser('GetUserByEmail',email);
   
   let isValid = true;
   
   if(!tools.isLastname(lastname) && !tools.isFirstname(firstname) && !tools.isUsername(username) && GetUserByUsername[0] && !tools.isEmail(email)   && GetUserByEmail[0]&& !tools.isPassword(password, confirmPassword) )
   {
       isValid = false;
   }
   else
   {
      let hashPassword = await bcrypt.hash(password, 10);
      const verifToken = crypto.randomBytes(64).toString('hex');
      registerModel(lastname, firstname, username, email, hashPassword);
      common.UpdateVerifToken(email, verifToken);
      common.sendEmail(email, verifToken);
   }
   res.send(isValid);
};

module.exports = Register;