const user = require('../../models/user');

blockUser = async (req, res) => {
    const data = req.body;
    user.insert('blockUser',[data.id,data.blocked_user_id])
    .then((response) => {
        console.log('blocked')
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = blockUser;