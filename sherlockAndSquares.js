function processData(input) {
    //Enter your code here
    input = input.split("\n");
    for(var i = 1; i < input.length; i++){
        input[i] = input[i].split(" ");
        console.log(Math.floor(Math.sqrt(input[i][1])) - Math.ceil(Math.sqrt(input[i][0])) + 1);
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
