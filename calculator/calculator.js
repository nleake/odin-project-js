function add (a, b) {
	return a + b;
}

function subtract (a, b) {
 return a - b;
}

function sum (array) {
	if (array === undefined) {return 0};
	if (array.length === 1 ) {return array[0]};
	let sum = 0;
	for (let index = 0; index < array.length; index++) {
		sum += array[index];
	}
	return sum;
}

function multiply (arr) {
	return arr.reduce((acc, val) => acc * val);
}

function power(a, b) {
	return a ** b;
}

function factorial(val) {
	if (val > 0 ) {
		let factorial = 1;
		for( let i = 1; i <= val; i++){
			factorial = factorial * i;
		}
		return factorial;
	} else return val;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}