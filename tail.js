// FUNCTION IMPLEMENTATION
const tail = function(array1){
	return array1.slice(1);
};


const assertEqual = function(tail, expected) {

	if (tail === expected){
		console.log("Assertion passed: " + tail + " === " + expected);
	}else if (tail.length === 0){
		console.log(undefined);
	}else{
		console.log("Assertion failed: " + tail + " !== " + expected);
	}
};


//test
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!