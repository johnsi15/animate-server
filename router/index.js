const path = require('path');
const st = require('st');
const course = require('course');

const router = course();

const mount = st({
	path: path.join(__dirname, '..', 'public'),
	index: 'index.html',
	passthrough: true //si hay un error de 404 que no se detenga aca sino que siga hasta encontrar el onRequest
});

function onRequest(req, res){
	mount(req, res, function(err){
		if(err) return res.end(err,message);

		router(req, res, function(err){
			if(err) return fail(err,res);
			
			res.statusCode = 404;
			res.end('Not Fount 404'+ req.url);
		});
	});
}

function fail(err, res){
	res.statusCode = 500;
	res.setHeader('Content-Type', 'text/plain');
	res.end(err,message);
}

module.exports = onRequest;