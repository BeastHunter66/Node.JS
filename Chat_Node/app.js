const httpServer = require('http').createServer(srv_list);
const io = require('socket.io')(httpServer);


const host = 'localhost';
const port = 3000;

function srv_list(req, res) {       //srv_list: config function of the httpServer
    res.writeHead(200);             //httpServer: srv_list invoker       
    res.end("Servidor rodando.");
}

httpServer.listen(port);

//SOCKET CONFIGURATION / LISTENING.
io.on("establish_conn", function(Socket){   //io: Socket identifier

    /*Conection establishment and messages exchange. */
});