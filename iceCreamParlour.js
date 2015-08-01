function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = +input.shift();
    var m = 0;
    var flavours = 0;
    var flavourPrice = [];
    for(var i = 0; i <= (n-1)*3; i += 3) {
        m = +input[i];
        flavours = +input[i + 1];
        flavourPrice = input[i + 2].split(" ");
        for(var j = 0; j < flavours; j++) {
            for(var k = j + 1; k < flavours; k++) {
                if(+flavourPrice[j] + +flavourPrice[k] == m) {
                    console.log((j+1) + " " + (k+1));
                    break;
                }
            }
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
