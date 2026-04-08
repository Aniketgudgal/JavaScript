let p = new Promise((resolve, reject) => 
{
	let n = 10;
	if(n % 2 == 0)
	{
		resolve("Promise is resolve beause num is event Done");
	}
	else
	{
		reject("Promise rejected num is odd");
	}
});

p.then((data) => console.log(data)).catch((err) => console.log(err));
