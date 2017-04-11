#include <stdio.h>
#define B "booboo"
#define X 10
#define BOOK "War an Peace"
int main(void){
	// int age;
	// char name[60];
	// printf("Please enter your first name.\n");
	// scanf("%s",name);
	// printf("All right,%s, what's your age?\n",name);
	// scanf("%d",&age);
	// int xp=age+X;
	// printf("That's a %s! You must be at least %d.\n",B,xp );

	float cost=12.99;
	float percent=80.0;
	printf("This copy of  \"%s\" sells for $%2.2f.\nThat is %2.0f%% of list.\n",BOOK,cost,percent);
	return 0;
}