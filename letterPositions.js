const letterPositions = function(sentence) {
  const results = {};
  //const index = [];
  for(const i in sentence){
	  if(sentence[i] === " ")
		  continue;
	  if(results[sentence[i]]){
		  results[sentence[i]].push(Number(i));
	  }else{
		  results[sentence[i]] = [];
		  results[sentence[i]].push(Number(i));
	  }
  }
  return results;
};



const sentence = "hello";

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

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
