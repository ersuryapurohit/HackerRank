function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = +input.shift();
    input = input[0].split(" ");
    var sum = 0;
    for(var i = 0; i < n; i++) {
        sum += +input[i]
    }
    console.log(sum);
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