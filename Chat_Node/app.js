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
io.on("establish_conn", function(socket){   //io: Socket identifier

    /*Conection establishment and messages exchange. */
});

function getDate(){ // Date and Time capture and creation. Return the time in UTC.
    var adate = new Date();
    var day = (adate.getDate()< 10 ? '0' : '').adate.getDate();
    var month = ((adate.getMonth() + 1) < 10 ? '0' : '') + (adate.getMonth() + 1);
    var year = adate.getFullYear();
    var hour = (adate.getHours() < 10 ? '0' : '') + adate.getHours();
    var minutes = (adate.getMinutes() < 10 ? '0' : '') + adate.getMinutes();
    var seconds = (adate.getSeconds() < 10 ? '0' : '') + adate.getSeconds();

    var Formatdate = day + "/" + month + "/" + year + "/" + "-" + hour  + "/" + minutes + "/" + seconds + "/";
    return Formatdate;
}