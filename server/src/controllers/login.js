const bcrypt = require ('bcrypt')
const common = require('../models/common');

Login =  async (req, res, next) => {
    const {username, password} = req.body;
    const p= 0;
    let get = await  common.getUser('GetUserByUsername',username);
    if(get[0])
    {
        bcrypt.compare(password, get[0].password, function(error, response) {
            if (error){
                console.log(error+'ff')
            }
            if (response)
            {
                //  res.send({
                //      message : `Welcome ${username}`
                // })
                console.log('Welcome')
            }
            else 
            {
                // response.send({
                //     message : `incorrect password`
                // })
                console.log('incorrect password')
            }
          })
    }
    else
    {
        res.send({
            message : `${username} not found`
        })
    }
    
    


}

module.exports = Login;