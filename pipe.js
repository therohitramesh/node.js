var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){ //res object is writable
	console.log('Request was made ' + req.url);
	if(req.url === '/' || req.url === '/home'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
	else if(req.url === '/app/ninjas'){
		res.writeHead(200, {'Content-Type': 'application/json'});
		var ninjas = [{
			name : 'rohit',
			job: 'actor'
		},
		{
			name: 'tihor',
			job: 'rotca'
		}];
		res.end(JSON.stringify(ninjas));
	}
	else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(2000, '127.0.0.1');
console.log('Listening now on port 3000!');

