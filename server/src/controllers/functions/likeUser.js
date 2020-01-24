const user = require('../../models/user');
const rating = require('../functions/rating');
likeUser = async (req, res) => {
    const data = req.body;
    //console.log(req.headers)
   
    user.insert('likeUser',[data.id,data.liked_user_id])
    .then(async (response) => {
        const ra = await rating(data.liked_user_id);
        user.update('updateRating',[ra,data.liked_user_id]);
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = likeUser;