require('dotenv').config();

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

    socket.on('chatMessage', function(data){
        console.log('chatMsg');
        console.log(io.sockets.adapter.rooms[data.receiver]);
        io.to(data.receiver).emit('new_msg', {sender: data.sender, receiver: data.receiver, profilePic: data.profilePic, message: data.message});
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
})