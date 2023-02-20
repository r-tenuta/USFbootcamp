function hasDuplicate(arr){
	return new Set(arr).size !== arr.length;
}

const isVowel = (char) => {
	return "aeiou".includes(char);
}

function vowelCounter(string){
	let newStr = string.toLowerCase();
	const vowelMap = new Map();

	for (let char of newStr){
		if (isVowel(char)){
			if(vowelMap.has(char)){
				vowelMap.set(char, vowelMap.get(char) + 1);
			}
			else {
				vowelMap.set(char, 1);
			}
		}
	}
	return vowelMap;
}
