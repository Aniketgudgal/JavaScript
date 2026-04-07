/*
Logic:
 Divisible by 4 AND not by 100
 OR divisible by 400
Example:
Input: 2024
Output: Leap Year
*/
let year = 2024;
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
{
	console.log("Leap year");
}
else
{
	console.log("Not Leap year");
}