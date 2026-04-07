/*
Power of Number
Logic:
Multiply base repeatedly exponent times.
Example:
Input: 2^3
Output: 8
*/

let base = 2;
let power = 3;
let result = 1;
while(power != 0)
{
	result = result * base;
	power--;
}
console.log("result is: "+result);