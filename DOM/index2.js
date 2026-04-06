let count = 1;
function addRow()
{
    let tbody = document.getElementById("tbody");
    let hd = document.getElementById("headTr");
    let len = hd.children.length;
    let tr = document.createElement("tr");
    for(let i = 1; i <= len; i++)
    {
        let td = document.createElement("td");
        td.style.textAlign = "center";
        if(i == 1)
        {
            td.innerHTML = count;
            count++;
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
function removeRow()
{
    let tbody = document.getElementById("tbody");
    tbody.removeChild(tbody.lastElementChild);
    count--;
}
function addCol()
{
    let headTr = document.getElementById("headTr");
    let val = document.getElementById("addInput");
    if(val.length != 0)
    {
        let th = document.createElement("th");
        th.innerHTML = val.value;
        headTr.appendChild(th);
        val.value = "";
    }
    else
    {
        alert("Enter input");
    }
    
}