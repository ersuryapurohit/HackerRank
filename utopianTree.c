#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int t;
    scanf("%d",&t);
    while(t--){
        int n;
        scanf("%d", &n);
        int i;
        int height = 1;
        for(i=1; i <= n; i++){
            if( i%2==1)
                height = height * 2;
            else
                height = height + 1;
        }
        printf("%d\n",height);
    }
    return 0;
}

    