//function without
function without(a1, a2){
	for(let i = 0; i < a2.length; i++){
		for(let n = 0; n < a1.length; n++){
			if(a2[i] === a1[n]){
				a1.splice(n, 1);
			}
		}
	}
	return a1;
	
}

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
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));