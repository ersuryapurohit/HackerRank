function processData(input) {
    //Enter your code here
    input = input.split("\n");
    n = parseInt(input.shift());
    var regEx = /^[_.][0-9]+[a-z]*(_{1})?$/i;
    for (var i = 0; i < n; i++) {
        if(regEx.test(input[i])) {
            console.log("VALID");
        } else {
            console.log("INVALID");
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
