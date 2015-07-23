//"use strict";

const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer();

server.listen(port);

server.on('request', onRequest);
server.on('listening', onListening);

function onRequest(req, res){
	res.end("Hola io.js");
}

function onListening(){
	console.log("Servidor iniciado en el port " + port);
}

