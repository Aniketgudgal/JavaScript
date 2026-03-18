//Q5. Write a java program to print all odd numbers between 1 to 100.

let num = 100;
let i = 1;
while(i <= num)
{
	if(i % 2 != 0)
	{
		console.log(i);
	}
	i++;
}