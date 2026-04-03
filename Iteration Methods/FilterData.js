let arr = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
let newArray = arr.filter((val) => {
	if(val % 2 == 0)
	{
		return val;
	}
});
console.log(newArray);