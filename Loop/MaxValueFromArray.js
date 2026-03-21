// find out the max value from array
let num = [1,3,2,5,8];

let result = maxVal(num);
console.log("The max value is: "+result);
function maxVal(num)
{
	let max = 0;
	for(let i = 0; i < num.length; i++)
	{
		if(num[i] > max)
		{
			max = num[i];
		}
	}
	return max;
}