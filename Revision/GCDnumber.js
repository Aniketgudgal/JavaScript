/*
GCD of Two Numbers
Logic:
Find largest number dividing both numbers.
Example:
Input: 12, 18
Output: 6
*/
let num1 = 12;
let num2 = 18;
let max = 0;
for(let i = 1; i <= Math.min(num1,num2); i++)
{
	if(num1 % i == 0 && num2 % i == 0)
	{
		if(i > max)
		{
			max = i;
		}
	}
}
console.log("GCD of: "+num1+", "+num2+" is: "+max);