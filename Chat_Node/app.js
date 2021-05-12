const http = require('http');


const host = 'localhost';
const port = 3000;

const srv_list = function(req, res) {
    res.writeHead(200);
    res.end("Servidor rodando.");
}

const server = http.createServer(srv_list);
server.listen(port)