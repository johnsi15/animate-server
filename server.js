//"use strict";

const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer(function(req, res){
	res.end("Hola io.js");
});

server.listen(port, function(){
	console.log("Servidor iniciado en el port " + port);
});
