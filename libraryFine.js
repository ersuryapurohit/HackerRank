function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var actualDate = input[0].split(" ");
    var expectedDate = input[1].split(" ");
    if(+actualDate[2] > +expectedDate[2]){
        console.log("10000");
    } else if(!(+actualDate[2] < +expectedDate[2]) && +actualDate[1] > +expectedDate[1]){
        console.log((+actualDate[1] - +expectedDate[1]) * 500);
    } else if(!(+actualDate[2] < +expectedDate[2]) && !(+actualDate[1] < +expectedDate[1]) && +actualDate[0] > +expectedDate[0]){
        console.log((+actualDate[0] - +expectedDate[0]) * 15);
    } else{
        console.log("0");
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
