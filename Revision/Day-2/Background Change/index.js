function ChangeColor()
{
    let p1 = document.getElementById("1");
    let p2 = document.getElementById("2");
    let p3 = document.getElementById("3");
    p1.style.backgroundColor = "red";
    p2.style.backgroundColor = "green";
    p3.style.backgroundColor = "yellow";
}
function resetColor()
{
    let p1 = document.getElementById("1");
    let p2 = document.getElementById("2");
    let p3 = document.getElementById("3");
    p1.style.background = "none";
    p2.style.background = "none";
    p3.style.background = "none";
}