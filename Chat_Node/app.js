const httpServer = require('http').createServer(srv_list);
const io = require('socket.io')(httpServer);
const fs = require('fs'); //FileSystem
const url = require('url');


//Web Server base config.
const host = 'localhost';
const port = 3000;

var socket;

function srv_list(req, res) {       //srv_list: Basic functioning  function of the httpServer
    var file = "";

    var q = url.parse(req.url, true);
    if(q.pathname == "/") {
        console.log("Q.pathname = " + q.pathname)
        file = q.host + '/index.html';
    }
    
    

    fs.readFile(file, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end("Nao conseguimos encontrar a pagina desejada. :(")
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});             //httpServer: srv_list invoker       
            console.log("Página Encontrada");
            res.write(data);
            }
        
    });
}



httpServer.listen(port);    //Web Server acativation.

//SOCKET CONFIGURATION / LISTENING.
io.on("establish_conn", function(socket){   //io: Socket identifier. "establish_conn": Event name for opening connection with client.

    /*Conection establishment and messages exchange. */
});

 // Date and Time capture and creation. Return the time in UTC.
function getDate(){ 
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