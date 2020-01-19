const user = require('../../models/user');

loadMessages = async (req, res) => {
    const {user_id, conv_id} = req.body;
    console.log(user_id, conv_id);
    const messages = await user.select('getMessages', [user_id, user_id, conv_id, conv_id]);
    let data = [];
    // for(var i = 0; i < messages.lenght; i++){
    //     if(messages[i].sender === user_id)

    // }
    res.send(messages);
};
module.exports = loadMessages;