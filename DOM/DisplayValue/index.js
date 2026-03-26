function acceptValue()
{
    let a = document.getElementById("acceptVal");
    return a;
}
function displayValue()
{
    let inp = acceptValue();
    let a = document.getElementById("data");
    a.innerHTML = inp.value;
    a.style.color = "green";
    a.style.fontSize = "25px";
    return a;
}
function clearData()
{
 let a = displayValue();
 a.innerHTML = "";
 //document.getElementById("acceptVal").value = "";
 let b = acceptValue();
 b.value = "";
}