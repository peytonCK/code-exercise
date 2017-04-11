#include <stdio.h>

int main(void){
	int x=017;
	printf("%d\n",x);
	printf("%o\n",x);
	printf("%#x\n",x);
	printf("Type int has a size of %zd bytes\n",sizeof(int) );
	printf("Type char has a size of %zd bytes\n",sizeof(char) );
	printf("Type long has a size of %zd bytes\n",sizeof(long) );
	printf("Type long long has a size of %zd bytes\n",sizeof(long long) );
	printf("Type double has a size of %zd bytes\n",sizeof(double) );
		printf("Type long double has a size of %zd bytes\n",sizeof(long double) );
	// int i_input;
	// //scanf("%d",&i_input);
	// printf("%o\n",i_input );
	// printf("\a Enter your desired monthly salary:\n");
	// printf("%c\n",'a' );
		return 0;
}