function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = input[0];
    input.splice(0,1);
    for(var i = 0; i < n; i++){
        var arr = input[i*2].split(" ");
        var arr1 = input[i*2+1].split(" ");
        var ans1 = addBigNumbers(multiplyBigNumbers(addBigNumbers(arr[0],arr[1]),arr1[0]), multiplyBigNumbers(arr[1],arr1[2]));
        var ans2 = addBigNumbers(multiplyBigNumbers(addBigNumbers(arr[0],arr[1]),arr1[1]), multiplyBigNumbers(arr[0],arr1[2]));
        //var ans2 = (parseInt(arr[0])+parseInt(arr[1]))*arr1[1] + arr[0]*arr1[2];
        var ans3 = addBigNumbers(multiplyBigNumbers(arr[0],arr1[0]), multiplyBigNumbers(arr[1],arr1[1]));
        console.log(minOfBigNumbers(minOfBigNumbers(ans1, ans2),ans3));
    }
    
    
function minOfBigNumbers(a,b) {
	a += "";
	b += "";
	if(a.length > 15 || b. length > 15){
		if(a.length > b.length) {
			return (b);
		} else if(a.length < b.length){
			return a;
		} else {
			var half = a.length/2;
			var firstHalfOfFirst = a.slice(0,half);
			var secondHalfOfFirst = a.slice(half,a.length);
			var firstHalfOfSecond = b.slice(0,half);
			var secondHalfOfSecond = b.slice(half,a.length);
			if(firstHalfOfFirst != firstHalfOfSecond){
				if(Math.min(firstHalfOfFirst,firstHalfOfSecond) == +firstHalfOfSecond){
					return b;
                    minOfBigNumbers
				} else {
					return (a);
				}
			} else {
				if(Math.min(secondHalfOfFirst,secondHalfOfSecond) == +secondHalfOfSecond){
					return(b);
				} else {
					return(a);
				}
			}
		}
	} else {
		return(Math.min(a,b))
	}
}
// both the numbers must be in string format if it is more than a 16 digit number.
function multiplyBigNumbers(a,b) {
	a += "";
	b += "";
	if(a.length > 5){
		var half = a.length/2;
		var x = a.slice(0,half);
		var y = a.slice(half,a.length);
		var firstHalf = String(+b * +y);
		var secondHalf = String(+b * +x);
		var mul = String(+(firstHalf.slice(0, (firstHalf.length - half))) + +secondHalf) + firstHalf.slice((firstHalf.length - half), firstHalf.length);
		return mul;
	}
	else {
		return (+a * +b);
	}
};

// both the numbers must be in string format if it is more than a 16 digit number.
function addBigNumbers(a,b) {
	a += "";
	b += "";
	var zero = 0;
    if(a.length > 15 || b.length > 15){
    if(a.length > b.length) {
		b = zero.toFixed(a.length - b.length - 1).split(".").join("") + b;
	} else if(a.length < b.length){
		a = zero.toFixed(b.length - a.length - 1).split(".").join("") + a;
	}
	var half = a.length/2;
	var firstHalfOfFirst = a.slice(0,half);
	var secondHalfOfFirst = a.slice(half,a.length);
	var firstHalfOfSecond = b.slice(0,half);
	var secondHalfOfSecond = b.slice(half,a.length);
	var secondHalfSum = String((+secondHalfOfFirst) + (+secondHalfOfSecond));
	var carry = 0;
	if(secondHalfSum.length > secondHalfOfFirst.length){
		carry = +(secondHalfSum.slice(0, (secondHalfSum.length - secondHalfOfFirst.length)));
		secondHalfSum = secondHalfSum.slice((secondHalfSum.length - secondHalfOfFirst.length), secondHalfSum.length)
	}
	var firstHalfSum = String((+firstHalfOfFirst) + (+firstHalfOfSecond) + carry);
	var sum = firstHalfSum + secondHalfSum;
	return sum;
    } else {
        return String(+a + +b);
    }
}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
