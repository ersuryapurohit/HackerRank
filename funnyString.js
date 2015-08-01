function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = parseInt(input[0]);
    input.shift();
    var str = "";
    var rev = "";
    for(var i = 0; i < n; i++){
        var count = 0;
        str = input[i];
        rev = str.split("").reverse().join("");
        for(var j = 1; j < str.length; j++){
            
            if(Math.abs(str.charCodeAt(j) - str.charCodeAt(j-1)) != Math.abs(rev.charCodeAt(j) - rev.charCodeAt(j-1))){
                count++;
                break;
            }
        }
        if(count){
            console.log("Not Funny")
        } else{
            console.log("Funny");
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
