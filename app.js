var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));



app.get('/', function(req, res){
	res.render('index');
});

app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query}); //This is how you obtain queries from website's url
});

app.post('/contact', urlencodedParser, function(req, res){ //urlencodedParser is a middleware that gives the inputs from form as attributes of an object to be used.
	console.log(req.body);
	res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req,res){
	var data = {name: 'ramesh', age: 19, hobbies: ['cycling', 'fighting', 'acting']};
	res.render('profile.ejs', {person: req.params.name, data: data});
});

app.listen(3000);
console.log("Listening to port 3000!")