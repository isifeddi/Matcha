const matched = require('./matched');
const user = require('../../models/user');

sendMessage = async (req, res) => {
    const {sender, receiver, message} = req.body;
    const matchs = await matched(sender);
    const blocked = await user.select('checkBlock', [sender,sender,receiver,receiver]);
    const u1 = await  user.getUser('GetUserById',sender);
    const u2 = await  user.getUser('GetUserById',receiver);

    if(u1 && u2)
    {
        if(message.length > 255){
            res.send({sent: false, err:'Message is too long'});
            return ;
        }
        if(!matchs.includes(receiver)){
            res.send({sent: false, err:'Not matched'});
            return ;
        }  
        if(blocked.length){
            res.send({sent: false, err:'Blocked'});
            return ;
        }
        user.insert('insertMessage', [sender, receiver, message])
        .then(resp => {
            if(resp)
                res.send({sent:true})
        });
    }
    else
        res.send({sent: false, err:'user does not exist'});

};
module.exports = sendMessage;