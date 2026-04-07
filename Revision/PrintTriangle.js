/*
Right-Angled Triangle
Logic:
Nested loop → increase stars per row.
Example:
*
**
***
****


*/
for(let i = 1; i <= 4; i++)
{
	for(let j = 1; j <= 4; j++)
	{
		if(j <= i)
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