
let td = document.getElementById("myCell");

let table = document.createElement("table");

let tbody = document.createElement("tbody");

let tr1 = document.createElement("tr");
let td1 = document.createElement("td");
td1.textContent= "first text";
tr1.appendChild(td1);


let tr2 = document.getElementById("tr");
let td2 = document.createElement("td");
td2.textContent = "second text";
tr2.appendChild(td2);

tbody.appendChild(tr1);
tbody.appendChild(tr2);

table.appendChild(tbody);

td.appendChild(table);

function loadVal()
{
    let table = document.getElementById("tdata");
    a.setAttribute
}