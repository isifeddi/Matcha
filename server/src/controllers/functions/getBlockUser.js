const user = require('../../models/user');
const img = require('../../models/images');
getBlockUser = async (req, res) => {
    const user_id = req.body.id;
     const users = await user.select('getBlockUser',user_id);
     for (var i = 0; i < users.length; i++) {
        const images = await img.getProfilPic(users[i].id);
        users[i].profilePic = images[0].path;
    }
    res.send(users);
};
module.exports = getBlockUser;