/*
Count Digits
Logic:
Divide number by 10 repeatedly and count steps.
Example:
Input: 1234
Output: 4 digits
*/
let num = 1234;
let count = 0;
while(num > 0)
{
	count++;
	num = Math.round(num / 10);
}
console.log("Total digits are: "+count);