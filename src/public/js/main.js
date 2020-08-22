$(function (){
    
    const socket = io();

    // Obteniendo elementos del dom desde interfaz
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    // Captura de eventos
    $messageForm.submit(e =>{
        e.preventDefault();        
        if($messageBox.val() != ''){
            socket.emit('send message', $messageBox.val());
        }        
        $messageBox.val('');
        
    })

    socket.on('new message', mensaje=>{
        $chat.append(mensaje + '<br/>');
    })

})



