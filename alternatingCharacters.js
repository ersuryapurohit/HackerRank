function processData(input) {
    var a = input.split("\n");
    for(var i = 1; i < a.length; i++){        
            var count = 0;
            for(var j=1; j < a[i].length; j++){                
                if(a[i].charAt(j) == a[i].charAt(j-1)){
                    count++;
                }
            }
       console.log(count);
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
