function processData(input) {
    //Enter your code here
    input = input.split("\n");
    n = parseInt(input[0]);
    input.shift();
    var regEx = /[A-Z]{5}\d{4}[A-Z]{1}/;
    for (var i = 0; i < n; i++) {
        if(regEx.test(input[i])) {
            console.log("YES");
        } else {
            console.log("NO");
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
