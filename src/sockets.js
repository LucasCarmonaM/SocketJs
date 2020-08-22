module.exports = (io) =>{
    
    io.on('connection', (socket) => {        
        console.log('Usuario conectado');
        socket.on('send message', mensaje =>{
            io.sockets.emit('new message', mensaje);    
        })
        socket.on('disconnect',()=>{
            console.log('Un usuario se ha desconectado');
        })

    });
    
}

