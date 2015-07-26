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
	index = path.join(__dirname, 'public', 'index.html');
    res.setHeader('Content-Type', 'text/html');

    rs = fs.createReadStream(index);
    rs.pipe(res);

    rs.on('error', function(){
    	res.end(err.message);
    });
}

function onListening(){
	console.log("Servidor iniciado en el port " + port);
}

