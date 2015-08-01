function processData(input) {
    //Enter your code here
    var inputArray=input.split("\n");
    for(var i=1; i<inputArray.length;i++){
        console.log(4294967295 - inputArray[i]);
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
