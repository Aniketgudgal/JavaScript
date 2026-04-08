let btn = document.getElementById("btn");
let ul = document.getElementById("ul-tag");
btn.addEventListener('click',() =>{
    let li = document.createElement("li");
    let ipVal = document.getElementById("ipVal");
    if(ipVal.value.length != 0)
    {   
        li.innerHTML = ipVal.value;
       ul.append(li);
       ipVal.value = "";
    }
    else
    {
        alert("Enter the Input String");
    }
});
function deleteVal()
{
    ul.lastElementChild.remove();
}