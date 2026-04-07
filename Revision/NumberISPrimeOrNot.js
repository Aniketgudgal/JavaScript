/*
Prime Number
Logic:
Check divisibility from 2 to n-1 (or √n).
Example:
Input: 7
Output: Prime
*/
let num = 5;
let i = 2;
let flag = true;
while(i < num)
{
	if(num % i == 0)
	{
		flag = false;
		break;
	}
	i++;
}
if(flag)
{
	console.log("The Given Number is prime");
}
else
{
	console.log("Not a prime number");
}