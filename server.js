var fs = require('fs');
var http = require('http');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //myReadStream inherits events because of fs
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){ // data is event
	console.log('New chunk received');
	myWriteStream.write(chunk);
});







// var http = require('http');

// var server = http.createServer(function(req, res){
// 	console.log('Request was made ' + req.url);
// 	res.writeHead(200, {'Content-Type': 'text/plain'}); //res.writeHead(status, content-type)
// 	res.end('Yo dawgs!');
// });

// server.listen(3000, '127.0.0.1');
// console.log('Listening now on port 3000!');

