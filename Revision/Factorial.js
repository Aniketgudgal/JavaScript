/*
Factorial
Logic:
Multiply numbers from 1 to N.
Example:
Input: 5
Output: 120
*/
let num = 5;
let fact = 1;
while(num > 0)
{
	fact = fact*num;
	num--;
}
console.log(fact);