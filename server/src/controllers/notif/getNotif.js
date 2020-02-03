const user = require('../../models/user');

getNotif = async (req, res) => {
    const user_id = req.body.user_id;
    console.log('tt',user_id);
    user.select('getNotif', user_id)
    .then(res => {
     
            console.log(res);
       
    })
    res.send(res);
};
module.exports = getMatchedUsers;