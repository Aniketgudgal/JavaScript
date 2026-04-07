/*
Sum of Digits
Logic:
Add each digit of number.
Example:
Input: 123
Output: 6
*/
let num = 123;
let sum = 0;
while(num > 0)
{
	sum += num % 10;
	num = Math.round(num / 10);
}
console.log("Digit Sum is: "+sum);