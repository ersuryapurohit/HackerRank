function processData(input) {
    //Enter your code here
    var arr = input.split("\n");
    var n = +arr.shift();
    for(var i = 0; i < n*2; i += 2){
        var count = 0;
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i+1].indexOf(arr[i][j]) != -1){
                count++;
            }
        }
        if(count){
            console.log("YES")
        } else {
            console.log("NO");
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
