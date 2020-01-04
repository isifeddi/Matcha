const user = require('../../models/user');

dislikeUser = async (req, res) => {
    const data = req.body;
    user.delete('dislikeUser',[data.id,data.dislike_user_id])
    .then((response) => {
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = dislikeUser;