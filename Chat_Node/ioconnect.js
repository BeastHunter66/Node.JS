//This Script performs the client side connection of the socket method.
//This opens the connection and shend messages, as well as receives then. 
const io = require('socket.io');

var socket = io.connect();
socket.emit("establish_conn","OK");

//$(this.#msg_sd).submit(function(e) {
    //e.preventDefault();
    //socket.emit()
//}