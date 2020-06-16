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

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
	if (actual === expected){
		console.log("Assertion passed: " + actual + " === " + expected);
	}else{
		console.log("Assertion failed: " + actual + " !== " + expected);
	}
};

// TEST CODE
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);