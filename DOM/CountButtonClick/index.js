let count = 0;
function add()
{
    count++;
    showInfo();
}
function clearCount()
{
    count = 0;
    showInfo();
}
function showInfo()
{
 let a = document.getElementById("showInfo");
    a.innerHTML = "count is: "+count;
    a.style.color = "green";
    a.style.fontSize = "1.5em";
}
function deLoad()
{
   showInfo();
}