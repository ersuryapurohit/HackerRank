function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = +input.shift();
    var sum = 0;
    var sum1 = 0;
    for (var i = 0; i < n; i++) {
        input[i] = input[i].split(" ");
        sum += +input[i][i];
        sum1 += +input[i][n-i-1];
    }
    console.log(Math.abs(sum - sum1));
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
