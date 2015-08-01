function processData(input) {
    //Enter your code here
    var inputArray=input.split("\n");
    var data = inputArray[1].split(" ");
    for( var i = 0; i < data.length; i++){
        if(data.indexOf(data[i]) == data.lastIndexOf(data[i])){
            console.log(data[i]);
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
