var a = 'XYZ'

// function permutation(a){
// 	var answer = [];
// 	if(a.length == 1) {
// 		answer.push(a);
// 		return answer;
// 	}
// 	for(var i = 0; i < a.length; i++) {
// 		var firstChar = a[i];
// 		var otherChar = a.slice(0,i) + a.slice(i+1);
// 		for( var j = 0 ; j < otherPermutations.length ;j++) {
// 			answer.push(firstChar + permutation(otherChar));
// 		}
// 	}
// 	return answer;
// }


function permutation(a){
	var answer = [];
	if(a.length == 1) {
		answer.push(a);
		return answer;
	}
	for(var i = 0; i < a.length; i++) {
		var firstChar = a[i];
		var otherChar = a.slice(0,i) + a.slice(i+1);
		var otherPermutations = permutation(otherChar);
		for( var j = 0 ; j < otherPermutations.length ;j++) {
			answer.push(firstChar + otherPermutations[j]);
		}
	}
	return answer;
}


console.log(permutation(a));