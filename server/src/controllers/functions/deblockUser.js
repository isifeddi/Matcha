const user = require('../../models/user');

deblockUser = async (req, res) => {
    const data = req.body;
    user.delete('deblockUser',[data.id,data.deblocked_user_id])
    .then((response) => {
        console.log('deblocked')
        res.send(true);
        
    }).catch((error) => {
        console.log(error);
    });

};
module.exports = deblockUser;