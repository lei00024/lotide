//function eqArrays
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

//function eqObjects
const eqObjects = function(object1, object2){
	if(Object.keys(object1).length !== Object.keys(object2).length){
		return false;
	}else{
		for(let key in object1){
			if(object2[key]){
				//implements eqArrays
				if (Array.isArray(object1[key])) {
					if (!Array.isArray(object2[key])) return false; // One is an array but the other isn't
						if (!eqArrays(object1[key], object2[key])) return false; //Check if arrays are identitical
							} else if (typeof object1[key] === 'object' &&
								typeof object2[key] === 'object') { //arrays have already been filtered out in above if case.
							if (!eqObjects(object1[key], object2[key])) {//recursive call if they are equal objects
								return false;
							}
							} else if (object2[key] !== object1[key]) { //Different values
								return false;
							}

			} else {
				return false;
			}
		}

			return true;
		};
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
//primitive as values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

//arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false