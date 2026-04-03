function show()
{
    let prom = fetch("https://jsonplaceholder.typicode.com/posts");
    prom.then((val) => val.json()).then(
        (data) =>
        {
            let tb = document.getElementById("data");
            for(let i = 0; i < data.length; i++)
            {
                let tr = document.createElement("tr");
                tr.style.border = "1px";

                let td2 = document.createElement("td");
                td2.innerHTML = data[i].id+"";
                tr.appendChild(td2);

                let td3 = document.createElement("td");
                td3.innerHTML = data[i].title+"";
                tr.appendChild(td3);

                let td4 = document.createElement("td");
                td4.innerHTML = data[i].body+"";
                tr.appendChild(td4);

                tb.appendChild(tr);

            }
            let a = document.getElementById("btn-val");
            a.style.backgroundColor = "green";
            a.style.color = "white";
            a.style.border = "none";
        }     
    ).catch((error) => console.log(error));
}
function clear()
{
    let d = document.getElementById("data");
    d.innerText = "";
}