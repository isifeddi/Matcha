let Module = require('../models/user_model');
const tools = require('../outils/index');
const bcrypt = require ('bcrypt')
const userController = {};


userController.register = (req, res, next) => {
   const {firstname, lastname, username, email, password, confirmPassword} = req.body;

   const validate = () => {
      if(!tools.isFirstname(firstname))
      {
         console.log("firstname Error");
         return false;
      }
      if(!tools.isLastname(lastname))
      {
         console.log("lastname Error");
         return false;
      }
      if(!tools.isUsername(username))
      {
      console.log("username Error");
      return false;
      }

      if(!tools.isEmail(email))
      {
         console.log("email Error");
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
      Module.userRegister(firstname, lastname, username, email, hashPassword);
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

module.exports = userController;