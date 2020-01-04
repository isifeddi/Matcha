const user = require('../../models/user');
const rating = require('../functions/rating');
likeUser = async (req, res) => {
    const data = req.body;
    const ra = rating('like');
    console.log(ra)
    user.insert('likeUser',[data.id,data.liked_user_id])
    .then((response) => {
        //const ss = user.update('',[liked_user_id,])
        console.log('liked')
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = likeUser;