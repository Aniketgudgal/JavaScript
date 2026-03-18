//Q10. Write a java program to count the number of digits in a number.

let n = 12345;
let count = 0;
while(n != 0)
{
	count++;
	n = Math.floor(n/10);
}
console.log("Total Digit is: "+count);