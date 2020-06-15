// FUNCTION IMPLEMENTATION
const head = function(heads){
	return heads[0];
};


const assertEqual = function(head, expected) {

	if (head === expected){
		console.log("Assertion passed: " + head + " === " + expected);
	}else if (head.length === 0){
		console.log(undefined);
	}else{
		console.log("Assertion failed: " + head + " !== " + expected);
	}
};


//test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");