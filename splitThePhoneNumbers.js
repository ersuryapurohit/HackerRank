function processData(input) {
    //Enter your code here
    input = input.split("\n");
    n = parseInt(input[0]);
    input.shift();
    //var regEx = /[A-Z]{5}\d{4}[A-Z]{1}/;
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr = input[i].split(/[ -]/g);
        console.log("CountryCode="+arr[0]+",LocalAreaCode="+arr[1]+",Number="+arr[2]);
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
