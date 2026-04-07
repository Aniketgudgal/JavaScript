/*
Armstrong Number
Logic:
Sum of digits raised to power of number of digits equals original number.
Example:
Input: 153
Output: Armstrong number
(1³ + 5³ + 3³ = 153)
*/
let num = 153;
let temp = num;
let power = 0;
while(temp > 0)
{
	power++;
	temp = Math.round(temp/10);
}
let sum = 0;
temp = num;
while(temp > 0)
{
	let rem = temp % 10;
	let res = 1;
	let p = power;
	while(p > 0)
	{
		res = res*rem;
		p--;
	}
	sum += res;
	temp = Math.floor(temp / 10);
}
if(num === sum)
{
	console.log("The Number is Armstrong");
}
else
{
	console.log("Not a Armstrong Number");
}