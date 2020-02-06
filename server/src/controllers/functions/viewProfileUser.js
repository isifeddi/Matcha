const user = require('../../models/user');
const rating = require('../functions/rating');
viewProfileUser = async (req, res) => {
    const data = req.body;
    const resp = await user.insert('viewProfileUser',[data.id,data.viewed_user_id]);
    if(resp)
    {
        const ra = await rating(data.viewed_user_id);
        user.update('updateRating',[ra, data.viewed_user_id]);
        await user.insert('insertNotif', [data.id, data.viewed_user_id, `${data.username} viewed your profile`, 0]);
        res.send(true);
    }
};
module.exports = viewProfileUser;