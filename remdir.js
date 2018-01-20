var fs = require('fs');

fs.mkdir('stuff', function(){
	data = fs.readFile('readMe.txt', 'utf8', function(err, data){
		fs.writeFile('./stuff/writeMe.txt', data);
	});
});

//TO REMOVE A DIR FIRST UNLINK FILES WITHIN AND THEN RMDIR

fs.unlink('./stuff/writeMe.txt', function(){
	fs.rmdir('stuff');
})