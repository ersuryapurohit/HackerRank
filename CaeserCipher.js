function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = +input.shift();
    var str = input.shift().split("");
    var inc = +input.shift() % 26;
    var characterCode;
    for(var i = 0; i < n; i++){
        if(str[i].match(/[a-z]/)){
            characterCode = ((str[i].charCodeAt(0) + inc) > 122) ? ((str[i].charCodeAt(0) + inc) % 122 + 96) : (str[i].charCodeAt(0) + inc);
            str[i] = String.fromCharCode(characterCode);
        } else if(str[i].match(/[A-Z]/)){
            characterCode = ((str[i].charCodeAt(0) + inc) > 90) ? ((str[i].charCodeAt(0) + inc) % 90 + 64) : (str[i].charCodeAt(0) + inc);
            str[i] = String.fromCharCode(characterCode);
        }
    }
    console.log(str.join(""));
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
