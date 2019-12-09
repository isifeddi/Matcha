const tools = require('../tools/index');
const bcrypt = require ('bcrypt');
const crypto = require('crypto');
const user = require('../models/user');
const EM = require('./functions/email')
   Register = async (req, res) => {
   const {firstname, lastname, username, email, password, confirmPassword} = req.body;
   let GetUserByUsername = await  user.getUser('GetUserByUsername',username);
   let GetUserByEmail = await  user.getUser('GetUserByEmail',email);
   
   let isValid = true;
   
   if(!tools.isLastname(lastname) && !tools.isFirstname(firstname) && !tools.isUsername(username) && GetUserByUsername[0] && !tools.isEmail(email)   && GetUserByEmail[0]&& !tools.isPassword(password, confirmPassword) )
   {
       isValid = false;
   }
   else
   {
      let hashPassword = await bcrypt.hash(password, 10);
      const verifToken = crypto.randomBytes(64).toString('hex');
      user.Register(lastname, firstname, username, email, hashPassword);
      user.UpdateVerifToken(email, verifToken);
      EM.sendEmail(email, verifToken);
   }
   res.send(isValid);
};

module.exports = Register;