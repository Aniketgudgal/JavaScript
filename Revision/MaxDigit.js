/*
Largest Digit
Logic:
Extract digits and compare.
Example:
Input: 5832
Output: 8
*/
let num = 5832;
let max = 0;
while(num > 0)
{
	let rem = num % 10;
	if(rem > max)
	{
		max = rem;
	}
	num = Math.round(num / 10);
}
console.log("Max digit is: "+max);