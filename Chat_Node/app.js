//MAIN FILE FOR THE CHAT MODULE, IT CONTROLS ALL THE CONNECTIONS AND PAGE ACESSES.
//IT ALSO UPDATES THE HTML PAGE VIA APPENDING A NEW CHILD TO THE MESSAGE BOX.
//Created by André Andrade(BeastHunter66) in 12/05/2021
//GPL-3.0
//Any problems, bugs or optimizations feel free to contact me at andrelsandrade42@gmail.com
//Contents:
//app.js: Server-Side Node.JS 
//ioconnect.js: Client-Side connection handler.
//index.html: home page for the chat box.
//package.json: Configuration file for the Node.JS project.
//---------------------------------------------------------------------------------------------------------------------

const httpServer = require('http').createServer(srv_list); //HTTP Server.
const io = require('socket.io')(httpServer);               //Sockets.
const fs = require('fs');                                  //FileSystem.
const url = require('url');                                //URL handler.


//HTTP Server base config.
const host = 'localhost';
const port = 3000;

//HTTP server Functionalities:
function srv_list(req, res) {       
    var file = "";
    console.log("req.url: " + req.url);

    var q = url.parse(req.url, true);
    if(q.pathname == "/") {
        console.log("Q.pathname = " + q.pathname);
        console.log("Q.host: " + q.host);
        file =__dirname + '/index.html';
        console.log("File: " + file);
    }

    fs.readFile(file, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end("Couldn´t find the page you want :(")
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});                  
            console.log("Page Found");
            res.write(data);
            }
        
    });
}

httpServer.listen(port);    //HTTP SERVER Listening delcaration
 
//SOCKET CONFIGURATION / LISTENING.

io.sockets.on('connection', function(socket) {   //io: Socket identifier. "connection": Event name for opening connection with client.
    /*Conection establishment and messages exchange. */
   socket.on('message',function(message){
       console.log(message);
   });
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