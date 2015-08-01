function processData(input) {
    //Enter your code here
    //Enter your code here
    input = input.split("\n");
    n = parseInt(input[0]);
    input.shift();
    var regEx = /hackerrank/i;
    var count = 0;
    for (var i = 0; i < n; i++) {
        if(regEx.test(input[i])) {
            count++;
        } else {
            //console.log("NO");
        }
    }
    console.log(count);
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
