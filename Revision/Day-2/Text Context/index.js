let orignalVal;
function changeText()
{
    let h1 = document.getElementById("text");
    orignalVal = h1.innerHTML
    h1.innerHTML = "Hello World";
}
function originValue()
{
    let h1 = document.getElementById("text");
    h1.innerHTML = orignalVal;
}