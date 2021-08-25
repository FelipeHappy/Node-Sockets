//Referencias HTML
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')




//Socket = Cliente
const socket = io()

//La sentencia ON sirve para escuchar eventos
//Conexion de socket
socket.on('connect', () =>{
    // console.log('Conectado')

    //Cuando esté conectado el label Offline se ocultará ( HTML )
    lblOffline.style.display = 'none';
    //Cuando esté conectado muestra el lbl Online ( HTML )
    lblOnline.style.display = ''

})

//Desconexion de socket
socket.on('disconnect', () =>{
    // console.log('Desconectado del servidor')
})

//Escuchar evento de enviar-mensaje(server)
socket.on('Enviar-mensaje', (payload)=>{
    console.log(payload)
})

//Evento que se dispara al apretar el btnEnviar
btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    
    const payload = {
        mensaje,
        id:'123cris',
        fecha: new Date().getTime()
    }
    //Envia peticion/mensaje al server
    socket.emit('Enviar-mensaje', payload, (id) => {
        console.log('Desde el server ', id)
    })
})