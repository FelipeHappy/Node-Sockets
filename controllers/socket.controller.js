
const socketController = (socket) => {
    //Cuando un cliente se conecta:
    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    })

    //Escuchar mensaje desde el socket-client
    //El callback es la ref a la funcion realizada en el socket client
    socket.on('Enviar-mensaje', (payload, callback) => {
        
        const id = 12345;
        callback(id);
        //Emito el mensaje a todos los clientes
        socket.broadcast.emit('Enviar-mensaje', payload);
    })
}

module.exports = {
    socketController
}