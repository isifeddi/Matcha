const user = require('../../models/user');
const img = require('../../models/images');
const filtreUsers = require('../../controllers/functions/filtre');

getUsers = async (req, res) => {
    const Da = [];
    const user_id = req.body.id;
    const filtre = req.body.filtre;
    const Data = await filtreUsers(user_id,filtre);
    for (var i = 0; i < Data.length; i++) {
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