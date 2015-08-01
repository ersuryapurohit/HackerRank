function processData(input) {
    //Enter your code here
    var amPm = input.slice(input.length - 2);
    input = input.slice(0, input.length - 2).split(":");
    var hrs = +input[0];
    var min = +input[1];
    var sec = +input[2];
    if(amPm == "AM"){
        if(hrs < 12) {
            if(hrs < 10){
                input[0] = "0" + hrs;
            }
        } else {
            input[0] = "00";
        }
    } else {
        if(hrs < 12) {
            input[0] = hrs + 12;
        }
    }
    console.log(input.join(":"))
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
