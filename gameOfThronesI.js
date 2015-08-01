Array.prototype.count = function(value) {
    return this.reduce(function(total,x){return x==2 ? total+1 : total}, 0);
}
function processData(input) {
    //Enter your code here
    var arr=[];
    var oddCount = 0;
    arr=input.split("");
    var b=arr.sort();
    var arr1=[];
    b.forEach(function(item){
        if(arr1.indexOf(item)===-1){
            arr1.push(item);
        }
    })
    function countItems(arr, what){
    var count= 0, i;
    while((i= arr.indexOf(what, i))!= -1){
        ++count;
        ++i;
    }
    return count
}
arr1.forEach(function(item){ 
    var countx = countItems(b,item);
    if(countx % 2 != 0){
        oddCount++;
    }
})
if(oddCount<=1){
    console.log("YES");
}
else{
    console.log("NO");
}}  
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
