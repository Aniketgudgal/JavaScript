function show()
{
    let a = document.getElementById("text-show");
    a.style.display = "block";
    // a.style.visibility = "visible";
    let p = document.getElementById("ptag");
    p.style.color = "green";
}
function hide()
{
    let a = document.getElementById("text-show");
    a.style.display = "none";
    // a.style.visibility = "hidden"
    let p = document.getElementById("ptag");
    p.style.color = "red";
}