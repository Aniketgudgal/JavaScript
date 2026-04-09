function checkPassword()
{
    let fInput = document.getElementById("firstInput");
    let fval = fInput.value;
    let cInput = document.getElementById("secondInput");
    let cval = cInput.value;
    let output = document.getElementById("output");
    if(fval.length === cval.length && fval.length != 0)
    {
        let flag = true;
        for(let i = 0; i < fval.length; i++)
        {
            if(fval.charAt(i) != cval.charAt(i))
            {
                flag = false;
            }
        }
        if(flag)
        {
            output.innerHTML = "Valid Password";
            output.style.color = "green";
        }
        else
        {
            output.innerHTML = "Invalid Password";
            output.style.color = "red";
        }
        output.style.fontSize = "25px";
        fInput.value = "";
        cInput.value = "";
    }
    else
    {
        output.innerHTML = "Invalid Password";
        output.style.color = "red";
        fInput.value = "";
        cInput.value = "";
        output.style.fontSize = "25px";
    }
}