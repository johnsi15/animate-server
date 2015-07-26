//'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;

const server = http.createServer();

server.listen(port);

server.on('request', onRequest);
server.on('listening', onListening);

function onRequest(req, res){
	fileName = path.join(__dirname, 'public', 'index.html');
    fs.readFile(fileName, function(err, file){
    	if(err){
    		return res.end(err.message);
    	}
		res.end(file);
    });
}

function onListening(){
	console.log("Servidor iniciado en el port " + port);
}

