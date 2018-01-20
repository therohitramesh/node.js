var fs = require('fs');


//THESE ARE SYNCHRONOUS VERSIONS . Here read/write code blocks the following code from being executed
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
fs.writeFileSync('writeMe.txt', readMe);

//THESE ARE ASYNCHRONOUS VERSIONS . Here all the lines after the read/write code are executed simultaneously
var data = fs.readFile('readMe.txt', 'utf8', function(err, data){  //CALLBACK FUNCTION IS NEEDED IN CASE OF ASYNCHRONOUS. IT RUNS ONLY AFTER THE FILE GIVEN AS THE FIRST PARAMETER IS FULLY READ
	fs.writeFile('writeMe.txt', data);
})

console.log('Test');