/*
Inverted Triangle
Logic:
Decrease stars per row.
Example:
****
***
**
*


*/
let n = 4;
for(let i = 1; i <= n; i++)
{
	for(let j = 1; j <= n; j++)
	{
		if(j <= n - i+1)
		{
			process.stdout.write("*");
		}
		else
		{
			process.stdout.write(" ");
		}
	}
	console.log();
}