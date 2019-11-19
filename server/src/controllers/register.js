let registerModel = require('../models/User/Register');
const tools = require('../tools/index');
const bcrypt = require ('bcrypt')
const common = require('../models/common');


   Register = async (req, res) => {
   const {firstname, lastname, username, email, password, confirmPassword} = req.body;
   let GetUserByUsername = await  common.getUser('GetUserByUsername',username);
   let GetUserByEmail = await  common.getUser('GetUserByEmail',email);
   
   let isValid = true;
      
   if(!tools.isLastname(lastname) && !tools.isFirstname(firstname) && !tools.isUsername(username) && GetUserByUsername[0] && !tools.isEmail(email)  && GetUserByEmail[0]&& !tools.isPassword(password, confirmPassword) )
   {
       isValid = false;
   }
   else
   {
      let hashPassword = await bcrypt.hash(password, 10);
      registerModel(lastname, firstname, username, email, hashPassword);
   }

   res.send(isValid);
};

module.exports = Register;