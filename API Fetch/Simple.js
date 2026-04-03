let pro = fetch("https://catfact.ninja/fact");
console.log(pro);
pro.then((response) => response.json()).then((val) => console.log(val)).catch((error) => console.log("Error is: "+error));
console.log(pro);