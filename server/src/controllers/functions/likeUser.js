const user = require('../../models/user');

likeUser = async (req, res) => {
    const data = req.body;
    user.insert('likeUser',[data.id,data.liked_user_id])
    .then((response) => {
        console.log('liked')
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = likeUser;