function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = +input.shift();
    input = input[0].split(" ");
    var countZero = 0;
    var countPositive = 0;
    var countNegative = 0;
    for (var i = 0; i < n; i++) {
        if(+input[i] < 0) {
            countNegative++;
        } else if(+input[i] > 0) {
            countPositive++;
        } else {
            countZero++;
        }
    }
    console.log((countPositive/n).toFixed(3));
    console.log((countNegative/n).toFixed(3));
    console.log((countZero/n).toFixed(3));
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
