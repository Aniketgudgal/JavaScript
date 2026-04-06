let srno = 1;
function addRow()
{
    let a = document.getElementById("tbody");

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.setAttribute("height", "25px");
    td1.setAttribute("width", "105px");
    td1.innerHTML = srno;
    td1.style.textAlign = "center";
    srno++;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.setAttribute("height", "25px");
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td2.setAttribute("height", "25px");
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td2.setAttribute("height", "25px");
    tr.appendChild(td4);
    a.appendChild(tr);
}
function removeRow()
{
    let a = document.getElementById("tbody");
    a.removeChild(a.lastElementChild);
    srno--;
}