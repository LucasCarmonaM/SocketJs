// Paquetes npm requeridos

const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

// Configuracion express
const app = express();
const server = http.createServer(app);

const io = socketio.listen(server);

// Configuracion de puerto
app.set('port',process.env.PORT || 3000);

require('./sockets')(io);

// archivos
app.use(express.static(path.join(__dirname, 'public')));

// Servidor escuchando

server.listen(app.get('port'), ()=>{
    console.log(`escuchando puerto ${app.get('port')}`);
});

