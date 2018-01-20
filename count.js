var counter = function(arr){
	return "The number of elements in the array is = "+arr.length;
}

var adder = function(a,b){
	return"The sum of the numbers is "+ a+b;
}

var pi = 3.14;

module.exports = {
	counter: counter,
	adder: adder,
	pi:pi
}