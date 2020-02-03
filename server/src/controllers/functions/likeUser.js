const user = require('../../models/user');
const rating = require('../functions/rating');

likeUser = async (req, res) => {
    const data = req.body;
    user.insert('likeUser',[data.id, data.liked_user_id])
    .then(async (response) => {
        const ra = await rating(data.liked_user_id);
        await user.update('updateRating',[ra, data.liked_user_id]);
        await user.insert('insertNotif', [data.id, data.liked_user_id, `${data.username} liked you`, 0]);
        res.send(true);
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = likeUser;