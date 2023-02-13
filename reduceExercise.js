function extractValue(arr, key){
	return arr.reduce(function(result, obj){
		if (key in obj){
			result.push(obj[key]);
		}
		return result;
	}, []);
}

function vowelCount(str){
	let newStr = str.toLowerCase();
	let arr = newStr.split('');
	let vowels = 'aeiou';
	return arr.reduce(function(result, char){
		if (vowels.includes(char)){
			result[char] = (result[char] || 0) + 1;
		}
		return result;
	}, {})
}

function addKeyAndValue(arr, key, value){
	return arr.reduce(function(result, obj){
		obj[key] = value;
		result.push(obj);
		return result;
	}, [])
}

function partition(arr, callback){
	return arr.reduce(function(result, obj){
		callback(value) ? result[0].push(value) : result[1].push(value);
		return result;
	},([],[]))
}
