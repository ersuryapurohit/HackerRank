function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = input[0];
    var count = 0;
    for(var i = 1; i < input.length; i += 2){
        input[i] = input[i].split(" ");
        input [1+i] = input[1+i].split(" ");
        count = 0;
        for(var j = 0; j < input[i+1].length; j++){
            if(input[i+1][j] < 1){
                count++;
            }
        }
        if(count >= input[i][1]){
            console.log("NO");
        }
        else{
            console.log("YES")
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
