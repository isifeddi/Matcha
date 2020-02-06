const user = require('../../models/user');
const img = require('../../models/images');
const filtreUsers = require('./filtre');
const checkToken = require('./checkToken');
const checkLikes= require('./checkLikes')
getUsers = async (req, res) => {
    const Da = [];
     token = req.headers.authorization;
    // const isTokenValid = await checkToken(token);
    const user_id = req.body.id;
    const filtre = req.body.filtre;
    const Data = await filtreUsers(user_id,filtre);
    for (var i = 0; i < Data.length; i++) {
        Data[i].like = await  checkLikes(user_id,Data[i].id);
        const images = await img.getImages(Data[i].id);
        const interests  = await user.getUserInterests(Data[i].id); 
        Da[i]= {
         user :  Data[i],
         images : images,
         interests: interests
        }
    }
   res.send(Da);
    
};

module.exports = getUsers;