let p = new Promise((resolve, reject) => 
{
	let n = 1;
	if(n % 2 == 0)
	{
		resolve("Promise is resolve beause num is even");
	}
	else
	{
		reject("Promise rejected num is odd");
	}
});

p.then((data) => console.log(data)).catch((err) => console.log(err));
