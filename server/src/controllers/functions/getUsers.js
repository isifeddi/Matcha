const user = require('../../models/user');

getUsers = async (req, res) => {
    const user_id = req.body.id;
     user.getUsers(user_id)
    .then((response) => {
        res.send(response);
    }).catch((error) => {
        res.send(error);
    });
};

module.exports = getUsers;