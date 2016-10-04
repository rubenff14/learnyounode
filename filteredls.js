var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(error, files) {
	files.forEach(function(file) {
		var extension = '.' + process.argv[3];
		if (path.extname(file) == extension) {
			console.log(file);
		}
	});
});