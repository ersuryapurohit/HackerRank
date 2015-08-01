function processData(input) {
    //Enter your code here
    input = +input;
    for(var i = input-1; input >= 0; i--){
        var stringToPrint = "";
        var k = i;
        while(k != 0){
            stringToPrint += " ";
            k--;
        }
        var j = i;
        while(j != input) {
            stringToPrint += "#";
            j++;
        }
        console.log(stringToPrint);
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
