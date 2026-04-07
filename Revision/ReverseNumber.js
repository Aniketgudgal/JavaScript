/*
Reverse Number
Logic:
Extract digits and rebuild reversed number.
Example:
Input: 123
Output: 321
*/
let num = 123;
console.log("Orignal number is: "+num);
let rev = 0;
while(num > 0)
{
	rev = rev * 10 + num % 10;
	num = Math.round(num / 10);
}
console.log("Reverse Number is: "+rev);