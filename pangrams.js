function processData(input) {
    //Enter your code here
    var notPangram = 0;
    input = input.toLowerCase();
    var char = "";
    for (var i = 65; i <= 90; i++){
        char = String.fromCharCode(i|i+32);
        if(input.indexOf(char) == -1){
            notPangram++;
            break;
        }
    }
    if(notPangram){
        console.log("not pangram");
    }
    else{
        console.log("pangram");
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
