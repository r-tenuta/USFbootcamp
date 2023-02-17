const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (firstObj, secondObj) => ({...firstObj, ...secondObj});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

const removeRandom = (...item) => []

const extend = (array1, array2) => {
	return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
	return ({...obj, [key]: val});
}

const removeKey = (obj, key) => {
	let newObj = {...obj};
	delete newObj[key];
	return newObj;
}
