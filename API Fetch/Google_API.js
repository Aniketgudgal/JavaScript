let g = fetch("https://github.com/");
g.then((v) => v.text()).then((data) => console.log(data)).catch((e) => console.log(e));