function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var n = input[0];
    var arr = [];
    var dollars = 0;
    var price = 0;
    var wrappers = 0;
    var choco = 0;
    var total = 0;
    for(var i = 1; i <= n; i++){
        arr = input[i].split(" ");
        dollars = parseInt(arr[0]);
        price = parseInt(arr[1]);
        choco = parseInt(dollars/price);
        total = choco;
        wrappers = parseInt(arr[2]);
        while(choco >= wrappers){
            total += parseInt(choco/wrappers);
            choco = parseInt(choco/wrappers) + choco%wrappers;
        }
        console.log(total);
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
