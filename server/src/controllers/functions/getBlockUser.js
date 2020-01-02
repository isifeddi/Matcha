const user = require('../../models/user');
const img = require('../../models/images');
getBlockUser = async (req, res) => {
    const user_id = req.body.id;
     const users = await user.select('getBlockUser',user_id);
  const Data = [];
     for (var i = 0; i < users.length; i++) {
        const images = await img.getImages(users[i].id);
        Data[i]= {
         user :  users[i],
         images : images,
        }
    }
    res.send(Data);
};
module.exports = getBlockUser;