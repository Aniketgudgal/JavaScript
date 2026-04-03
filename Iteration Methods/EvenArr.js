// create array multiply only even values
let arr = new Array(10,12,13,14,15,16,17,18,19,20);
console.log(arr);
let newArr = arr.map((val) => {
	if(val % 2 == 0)
	{
		return val*2;
	}
	else
	{
		return val;
	}
});
console.log(newArr);