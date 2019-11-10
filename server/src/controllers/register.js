let registerModel = require('../models/User/Register');
const tools = require('../outils/index');
const bcrypt = require ('bcrypt')
const common = require('../models/common');


   Register = async (req, res) => {
   const {firstname, lastname, username, email, password, confirmPassword} = req.body;
   let GetUserByUsername = await  common.getUser('GetUserByUsername',username);
   let GetUserByEmail = await  common.getUser('GetUserByEmail',email);
   
   let isValid = 1;
   let error = {};
      
      if(!tools.isLastname(lastname))
      {
         isValid = 0;
         error.lastname = 'lastname Error'
      }
      if(!tools.isFirstname(firstname))
      {
         isValid = 0;
         error.firstname = 'firstname Error'
      }
      if(!tools.isUsername(username))
      {
         isValid = 0;
         error.username = 'username error'
      }
      else if(GetUserByUsername[0])
      {
         isValid = 0;
         error.username = 'Username already exists'
      }
      if(!tools.isEmail(email))
      {
         isValid = 0;
         error.email = 'email error'
      }
      else if(GetUserByEmail[0])
      {
         isValid = 0;
         error.email = 'Email already exists'
      }
      if(!tools.isPassword(password, confirmPassword))
      {
         isValid = 0;
         error.password = 'password error'
      }
        
   if(isValid)
   {
      let hashPassword = bcrypt.hashSync(password, 10);
      registerModel(lastname, firstname, username, email, hashPassword);
      res.send(error)
   }
   else{
      res.send(error)
   }
};

module.exports = Register;