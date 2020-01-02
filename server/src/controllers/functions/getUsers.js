const user = require('../../models/user');
const img = require('../../models/images');

getUsers = async (req, res) => {
   
    const user_id = req.body.id;
    const Data = [];
    const users = await user.getUsers(user_id);


    for (var i = 0; i < users.length; i++) {
        const images = await img.getImages(users[i].id);
        const interests  = await user.getUserInterests(users[i].id); 
        Data[i]= {
         user :  users[i],
         images : images,
         interests: interests
        }
    }
   res.send(Data);
    
};

module.exports = getUsers;