import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) 
    {
        
       Scanner sc=new Scanner(System.in);
       int n=sc.nextInt();
        int k;
        String a[]=new String[20];
            for(k=0;k<=n;k++)
        a[k]=sc.nextLine();

       for(k=1;k<=n;k++)
           {
           int count=0;
           int i=0;
           int len=a[k].length();
           int j=len-1;
			
            while(i<j)
                {
                int i1=(int)a[k].charAt(i);
                int j1=(int)a[k].charAt(j);
                if(i1==j1)
                {
                }
            if(i1>j1)
                {
                count=count+(i1-j1);
				
            }
            if(i1<j1)
                {
                count=count+(j1-i1);
				
            }
                i++;
                j--;
            }
			System.out.println(count);
       }
        }
    }

function insertionSort (ar) {
    return ar.sort(function(a,b){return a - b}).join(" ");
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   
    //get input for ar
    _input = _input.split("\n");
    _input.shift();
    _input = _input[0].split(" ");
    var a = insertionSort(_input);
    //print ar
    console.log(a);

    
});
