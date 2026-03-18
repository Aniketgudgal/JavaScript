//Q6. Write a java program to find the sum of all natural numbers between 1 to n.

let n = 10;
let sum = 0;
while (n != 0)
{
	sum += n;
	n--;
}
console.log("Total sum is: "+sum);