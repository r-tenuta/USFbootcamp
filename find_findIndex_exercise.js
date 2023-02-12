function findByUserName(arr, username){
	return arr.find(function(obj){
		return obj.username === username;
	})
}

function removeUser(arr, username) {
	let idx = arr.findIndex(function(user){
		return user.username === username;
	})
	if (idx === -1){
		return;
	}
	return arr.splice(idx, 1)[0];
}
