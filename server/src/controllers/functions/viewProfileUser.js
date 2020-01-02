const user = require('../../models/user');

viewProfileUser = async (req, res) => {
    const data = req.body;
    user.insert('viewProfileUser',[data.id,data.viewed_user_id])
    .then((response) => {
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = viewProfileUser;