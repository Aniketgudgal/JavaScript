//Q1. Write a java program to search an element in an array , its element found or not.
let a = 50;
let b = [10,20,30,40,50];
let result = findElement(b,a);
if(result)
{
	console.log("Element found in array");
}
else
{
	console.log("not found");
}
function findElement(b,n)
{
	for(let i = 0; i < b.length; i++)
	{
		if(b[i] == n)
		{
			return true;
		}
	}
	return false;
}