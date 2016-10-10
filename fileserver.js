 var http = require('http');
 var fs = require('fs');
 var bl = require('bl');

 var server = http.createServer(function(req, res) {
 	var datos;
 	var mensajError;
 	var fichero = fs.createReadStream(process.argv[3]);
 	fichero.pipe(bl(function(error, data) {
 		if (error) {
 			mensajError = "Error, el recurso solicictado no existe";
 			console.log(mensajError);

 			res.writeHead(404, {
 				'Content-Length': mensajError.length,
 				'Content-Type': 'text/plain'
 			});


 			res.write(mensajError);
 			res.end();
 		} else {
 			datos = data.toString();

 			res.writeHead(200, {
 				'Content-Length': datos.length,
 				'Content-Type': 'text/plain'
 			});

 			res.write(datos);
 			res.end();
 		}

 	}));

 });

 server.listen(process.argv[2], function() {
 	console.log("Escuchando en el puerto " + process.argv[2]);
 });