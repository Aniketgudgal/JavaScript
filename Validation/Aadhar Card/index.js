function validate()
{
    let a = document.getElementById("accept").value;
    if(a.length == 12)
    {
        let flag = true;
        for(let i = 0; i < a.length; i++)
        {
            if(!(a.charAt(i) >= '0' && a.charAt(i) <= '9'))
            {
                flag = false;
                break;
            }
        }
        let shMsg = document.getElementById("va");
        if(flag)
        {
            shMsg.innerHTML = "Valid Aadhar Number";
            shMsg.style.color = "green";
        }
        else
        {
            shMsg.innerHTML = "Invalid Number";
            shMsg.style.color = "red";
        }
    }
    else
    {
        alert("Invalid input");
    }
}