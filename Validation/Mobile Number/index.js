function checkNum()
{
    let a = document.getElementById("in").value;
    if(a.length == 10)
    {
        let flag = true;
        let spn = document.getElementById("sp");
        let cn = 1;
        for(let i = 0; i < a.length; i++)
        {
            if(cn == 1 && (a.charAt(i) >= '0'  && a.charAt(i) <= '5'))
            {
                flag = false;
                alert(i);
                break;
            }
            else if(cn != 1 && !(a.charAt(i) >= '0' && a.charAt(i) <= '9'))
            {
                flag = false;
                break;
            }
            ++cn;
        }
        if(flag)
        {
            spn.innerHTML = "Valid Number";
            spn.style.color = "green";
        }
        else
        {
            spn.innerHTML = "Invalid Number";
            spn.style.color = "red";
        }
    }
    else
    {
        alert("Invalid number");
    }
}