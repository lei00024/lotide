//Function eqArrays
function eqArrays(a1, a2){
	if(a1.length !== a2.length){
		return false;
	}else{
		for(let i = 0; i < a1.length; i++){
			if(a1[i] === a2[i]){
				return true;
			}
		}
	}
}

function assertArraysEqual(a1, a2){
	if(eqArrays(a1, a2) === true){
		return true;
	}else{
		return false;
	}
}

// ACTUAL FUNCTION
const middle = function(array) {
	let a1 = []
	if(array.length <= 2){
		return a1;
	}else if(array.length % 2 === 1){
		a1.push(array[Math.round(array.length / 2) - 1]);
	}else if(array.length % 2 === 0){
		a1.push(array[Math.round(array.length / 2) - 1]);
	a1.push(array[Math.round(array.length / 2)]);
	}
	return a1;
}

console.log(middle([1,2,3]));

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	if (actual === expected){
		console.log("Assertion passed: " + actual + " === " + expected);
	}else{
		console.log("Assertion failed: " + actual + " !== " + expected);
	}
};

// TEST CODE
assertEqual(assertArraysEqual(middle([1,2,3]), [2]), true);