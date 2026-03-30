function sum(...x)
{
	let total = 0;
	for(let i = 0; i < x.length; i++)
	{
		total += x[i];
	}
	return total;
}

let val = sum(10,20,30,40,50);
console.log(val);
