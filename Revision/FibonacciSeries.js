/*
Fibonacci Series
Logic:
Next number = sum of previous two.
Example:
Input: 5
Output: 0 1 1 2 3
*/
let count = 5;
let a = 0;
let b = 1;
let sum = 0;
while(count != 0)
{
	console.log(a);
	sum = a + b;
	a = b;
	b = sum;
	count--;
}