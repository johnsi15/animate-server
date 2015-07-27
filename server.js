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
	url = req.url;
	if(url===('/index') || url === '/'){
		return serveIndex(res);
	}

	if(url === '/app.js'){
		return serveApp(res);
	}

	res.statusCode = 404;
	res.end('404 not found '+ url);
}

function serveIndex(res){
	index = path.join(__dirname, 'public', 'index.html');
    res.setHeader('Content-Type', 'text/html');

    rs = fs.createReadStream(index);
    rs.pipe(res);

    rs.on('error', function(){
    	res.setHeader('Content-Type', 'text/html');
    	res.end(err.message);
    });
}

function serveApp(res){
	app = path.join(__dirname, 'public', 'app.js');
    res.setHeader('Content-Type', 'text/javascript');

    rs = fs.createReadStream(app);
    rs.pipe(res);

    rs.on('error', function(){
    	res.setHeader('Content-Type', 'text/javascript');
    	res.end(err.message);
    });
}

function onListening(){
	console.log("Servidor iniciado en el port " + port);
}

