var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){ //res object is writable
	console.log('Request was made ' + req.url);
	res.writeHead(200, {'Content-Type': 'application/json'}); //res.writeHead(status, content-type)
	var myObj = {
		name: 'Rohit',
		age: 20,
		job: 'Engg'
	};
	res.end(JSON.stringify(myObj)); //res.end() only takes in strings or buffer
});

server.listen(3000, '127.0.0.1');
console.log('Listening now on port 3000!');

