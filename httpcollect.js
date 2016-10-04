var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
	res.pipe(bl(function (error, data) {
		if (error) {
			return console.log(error.message);
		}
		console.log(data.length); 
 		console.log(data.toString());
 	}));
})

.on('error', function(e) {
		console.log("Got error: " + e.message);
});

		

