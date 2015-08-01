#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    int i, n, count;
    scanf("%d", &n);
    long long str[n];
    
    for(i=0;i<n;i++)
{
    scanf("%lld", &str[i]);

}
    
    for(i=0;i<n;i++)
{
      count=0;  
                 long long num = str[i];

    while(str[i] != 0)
        
        {
           // printf("n%d", num);
           //long long num = str[i];
        if(str[i]%10 !=0){
        if(num % (str[i] % 10) == 0)
            {
            count++;
        }}
        str[i] = str[i]/10;
   

}
         printf("%d\n", count);
    }
    return 0;
    
}
