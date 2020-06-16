const word = process.argv.slice(2);

const result = function(word){
	let s = "";
	for (let i = 0; i < word.length; i++){
		s += word[i].slice(1) + word[i][0] + "ay"
		s += " "
	}
	
	return s;
}
console.log(word);
console.log(result(word));
