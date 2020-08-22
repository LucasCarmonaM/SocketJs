module.exports = (io) =>{
    
    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('send message', mensaje =>{
            io.sockets.emit('new message', mensaje);    
        })

    });
}

