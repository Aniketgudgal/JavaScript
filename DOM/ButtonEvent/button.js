/*
1. Change Text on Button Click
Description: Change paragraph text when a button is clicked.
Practice: getElementById, innerText
*/
let b = document.getElementById("changeText").innerHTML = "This is your platform";
b.style.padding = "10px";

function changeText()
{
    let a = document.getElementById("changeText");
    a.innerHTML = "Thank you for choose us"
    a.style.color = "green";
    alert("Thank you for choose us");
}