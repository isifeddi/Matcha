const user = require('../../models/user');
const rating = require('../functions/rating');

likeUser = async (req, res) => {
    const data = req.body;
    const checkLike = await user.select('checkLike',[data.id,data.liked_user_id]);
    if(checkLike.length === 0)
    {
        user.insert('likeUser',[data.id, data.liked_user_id])
            .then(async (response) => {
                const ra = await rating(data.liked_user_id);
                await user.update('updateRating',[ra, data.liked_user_id]);
                await user.insert('insertNotif', [data.id, data.liked_user_id, `${data.username} liked you`, 0]);
                res.send(true);
            }).catch((error) => {
                console.log(error);
            });
    }
    else
    {
       console.log('deja liked');
       res.send(false);
    }
        
    
};
module.exports = likeUser;