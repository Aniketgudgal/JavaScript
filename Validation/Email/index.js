function checkEmail()
{
    let d = document.getElementById("checkId");
    let val = d.value;
    let flag = false;
    let doFlag = false;
    let count = 0;
    for(let i = 0; i < val.length; i++)
    {
        if(val.charAt(i) == '@')
        {
            flag = true;
        }
        else if(doFlag)
        {
            count++;
        }
        else if(val.charAt(i) == '.')
        {

            doFlag = true;
        }
    }
   
    let a = document.getElementById("displayData");
    a.value="";
    let b = document.createElement("span");
    if(flag && count >= 2 && doFlag)
    {
        a.innerHTML= "";
        b.innerText = "Valid Email Id";
        b.style.color = "green";
        a.appendChild(b);
    }
    else
    {
        a.innerHTML = "";
        b.innerText = "Invalid Email Address";
        b.style.color = "red";
        a.appendChild(b);
    }
}