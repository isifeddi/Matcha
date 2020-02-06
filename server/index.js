require('dotenv').config();
const user = require('./src/models/user');
const checkLikes = require('./src/controllers/functions/checkLikes');

const app = require('./src/app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`server is ready for connections on port ${PORT}`);
});

const io = require("socket.io").listen(server, {pingInterval: 60000, pingTimeout: 60000});

io.on('connection', socket => {
    socket.once('join', function (data) {
        socket.join(data.id);
    });

    socket.on('chatMessage', async function(data){
        const images  = await user.select('GetImages', data.sender);
        delete data.by.id;
        io.to(data.receiver).emit('new_msg', {sender: data.sender, receiver: data.receiver, profilePic: data.profilePic, message: data.message});
        io.to(data.sender).emit('received', {sender: data.sender, receiver: data.receiver, profilePic: data.profilePic, message: data.message});
        io.to(data.receiver).emit('new_notif', {by: {...data.by, images: images}, content: data.content});
    });

    socket.on('userLiked', async function(data){
        const relation = await checkLikes(data.by.id, data.receiver);
        const images  = await user.select('GetImages', data.by.id);
        delete data.by.id;
        if(relation === 'match')
            io.to(data.receiver).emit('new_notif', {by: {...data.by, images: images}, content: `You are matched with ${data.by.username}`});
        else
            io.to(data.receiver).emit('new_notif', {by: {...data.by, images: images}, content: data.content});
    });

    socket.on('profileViewed', async function(data){
        const images  = await user.select('GetImages', data.by.id);
        delete data.by.id;
        io.to(data.receiver).emit('new_notif', {by: {...data.by, images: images}, content: data.content});
    });

    socket.on('openNotif', function (data){
        io.to(data).emit('openedNotif', {data});
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
})