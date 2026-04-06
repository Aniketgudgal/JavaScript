let promise = fetch("https://jsonplaceholder.typicode.com/posts");
let a = promise.then((val) =>{ 
let js = val.json();
js.then((data) => 
{
	for(let i = 0; i < 5; i++)
	{
		console.log(data[i].userId+"\t"+data[i].id+"\t"+data[i].title);
	}
}
).catch((irr) => console.log("Inner Error"+irr));
}).catch((erro) => console.log("Error is: "+erro));