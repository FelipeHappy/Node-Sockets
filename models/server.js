const express = require('express')
const cors = require('cors');
const { socketController } = require('../controllers/socket.controller');



class Server {

    constructor(){
       this.app = express(); 
       this.port = process.env.PORT;
       //Este server se debe levantar no el de express
       this.server = require('http').createServer(this.app);
       this.io = require('socket.io')(this.server)

    //-----------Optimizacion (Alfabeticamente opcional)----------------
    this.paths = {
      
    }
       //Conectar a la BD
    //    this.connectBD();
 
       //Middlewares
       this.middleware();
       
       //Rutas de la aplicacion
       this.routes();

       //Configuracion Sockets
       this.sockets();
       
    }

    //Funcion para llamar la conexion a la BD
    // async connectBD () {
    //     await dbConnection()
    // }

    middleware(){
        
        //CORS
        this.app.use(cors() );
        
        //Directorio Publico
        this.app.use(express.static('public'))

    }

    routes() {

    }

    sockets(){

        //Instancia el objeto tipo io, de socket.io
        this.io.on('connection', socketController)
    };


    listen(){    
        this.server.listen(this.port, () => {
        console.log('Servidor Corriendo en puerto',this.port)
        });
    }

}

module.exports = Server;