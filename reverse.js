const word = process.argv.slice(2);
let s = "";
const result = function(word){
	for (let i = 0; i < word.length; i++){
		for(let n = word[i].length - 1; n >= 0; n--){
			s += word[i][n];
		}
		s += "\n"
	}
	return s;
}

console.log(word);
console.log(result(word));
