//"use strict";

const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

const server = http.createServer();

server.listen(port);

server.on('request', onRequest);
server.on('listening', onListening);

function onRequest(req, res){
	file = fs.readFileSync('public/index.html');
	res.end(file);
}

function onListening(){
	console.log("Servidor iniciado en el port " + port);
}

