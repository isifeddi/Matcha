let registerModel = require('../models/User/Register');
const tools = require('../outils/index');
const bcrypt = require ('bcrypt')
const common = require('../models/common');


   Register = async (req, res, next) => {
   const {firstname, lastname, username, email, password, confirmPassword} = req.body;
   let GetUserByUsername = await  common.getUser('GetUserByUsername',username);
   let GetUserByEmail = await  common.getUser('GetUserByEmail',email);
   const validate = () => {
      if(!tools.isLastname(lastname))
      {
         console.log("lastname Error");
         return false;
      }
      if(!tools.isFirstname(firstname))
      {
         console.log("firstname Error");
         return false;
      }
      if(!tools.isUsername(username))
      {
      console.log("username Error");
      return false;
      }
      else if(GetUserByUsername[0])
      {
         console.log("username exists");
         return false;
      }
      if(!tools.isEmail(email))
      {
         console.log("email Error");
         return false;
      }
      else if(GetUserByEmail[0])
      {
         console.log("email exists");
         return false;
      }
      if(!tools.isPassword(password, confirmPassword))
      {
         console.log("password error");
         return false;
      }
      return true;
   }
   

   if(validate())
   {
      let hashPassword = bcrypt.hashSync(password, 10);
      registerModel(lastname, firstname, username, email, hashPassword);
      res.send({
         message : `welcome ${lastname}`
      })
   }
   else{
      res.send({
         message : "ERROR"
      })
   }      
};

module.exports = Register;