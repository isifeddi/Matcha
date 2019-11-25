let registerModel = require('../models/User/Register');
const tools = require('../tools/index');
const bcrypt = require ('bcrypt')
const common = require('../models/common');
var nodemailer = require('nodemailer');


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
      var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: 'sifeddineilyass@gmail.com',
           pass: 'tgsxcjeduwchxlim'
         }
       });
       
       var mailOptions = {
         from: 'sifeddineilyass@gmail.com',
         to: email,
         subject: 'Confirm your account',
         text: 'Test'
       };
       
       transporter.sendMail(mailOptions, function(error, info){
         if (error) {
           console.log(error);
         } else {
           console.log('Email sent: ' + info.response);
         }
       });
      registerModel(lastname, firstname, username, email, hashPassword);
   }

   res.send(isValid);
};

module.exports = Register;
