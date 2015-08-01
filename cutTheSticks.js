Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var arr = input[1].split(" ");
    for(var i=0; i<arr.length;i++) arr[i] = parseInt(arr[i], 10);
    while(arr.length){
        console.log(arr.length);
        arr.remove(Math.min.apply(null,arr));
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
