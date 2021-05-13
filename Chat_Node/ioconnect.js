//This Script performs the client side connection of the socket method.
//This opens the connection and shend messages, as well as receives then. 
const io = require('socket.io');
const host = 'localhost';
const port  = 3000;
var message = 'Hello World';

//Socket connection.
var socket = io.connect('http://127.0.0.1:3000');
  socket.on('connect', function(){ //'connect': Event name for establish connection with the server.
    socket.send(message);
  });

/*socket.on('message', function(message){
    message = "Hello World !!!!";
    socket.send(message);
});*/