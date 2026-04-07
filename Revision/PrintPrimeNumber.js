/*
Prime Numbers up to N
Logic:
Check each number from 1 to N.
Example:
Input: 10
Output: 2 3 5 7
*/
let n = 100;
let j = 2;
while(j <= n)
{
	let i = 2;
	let flag = true;
	while(i < j)
	{
		if(j % i == 0)
		{
			flag = false;
		}
		i++;
	}
	if(flag)
	{
		console.log(j);
	}
	j++;
}	