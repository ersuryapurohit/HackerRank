String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var count = 0;
    for(var i = 2; i < input[0]; i++){
        for (var j = 1; j < input[i].length - 1; j++){
            if((input[i][j] > input[i][j-1]) && (input[i][j] > input[i][j+1]) && (input[i][j] > input[i-1][j]) && (input[i][j] > input[i+1][j])){
                input[i] = input[i].replaceAt(j, "X")
            }
        }
    }
    input.splice(0,1);
    input = input.join("\n");
    console.log(input);
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
