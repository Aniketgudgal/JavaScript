/*
Logic:
Compare all three numbers using conditions.
Example:
Input: 5, 9, 3
Output: Largest is 9
*/
let a = 5;
let b = 9;
let c = 3;
if(a > b && a > c)
{
	console.log(a);
}
else if(b > a && b > c)
{
	console.log(b);
}
else
{
	console.log(c);
}