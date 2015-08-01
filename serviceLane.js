function processData(input) {
    //Enter your code here
    input = input.split("\n");
    input[0] = input[0].split(" ");
    input[1] = input[1].split(" ");
    for(var i = 2; i < input.length; i++){
        input[i] = input[i].split(" ");
        console.log(Math.min.apply(null,input[1].slice(input[i][0],parseInt(input[i][1])+1)));
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
