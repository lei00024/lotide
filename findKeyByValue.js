const findKeyByValue = function(obj, value){
	//return Object.keys(obj).find(key => obj[key] === value);
	for(let i in obj){
		if(obj[i] === value){
			return i;
		}
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

//Test
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);