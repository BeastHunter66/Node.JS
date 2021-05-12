const http = require('http');


const host = 'localhost';
const port = 3000;

const srv_list = function(req, res) { //srv_list: função servidor.
    res.writeHead(200);               //server: invocação do servidor.
    res.end("Servidor rodando.");
}

const server = http.createServer(srv_list);
server.listen(port);