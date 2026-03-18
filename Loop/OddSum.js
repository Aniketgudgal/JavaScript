//Q8. Write a java program to find the sum of all odd numbers between 1 to n.

var n = 10;
var sum = 0;
while(n != 0)
{
	if(n % 2 != 0)
	{
		sum = sum + n;
	}
	n--;
}
console.log("Total Sum of Odd Number is: "+sum);