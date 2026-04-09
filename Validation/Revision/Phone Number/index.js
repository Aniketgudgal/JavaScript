function CheckNum()
{
    let num = document.getElementById("num");
    let val = num.value;
    num.value = "";
    let span = document.getElementById("output");
    span.innerHTML = "";
    span.style.marginTop = "15px";
    if(val.length === 10)
    {
        let flag = true;
        for(let i = 0; i < val.length; i++)
        {
            if(!(val.charAt(i) >= '0' && val.charAt(i) <= '9'))
            {
                flag = false;
            }
            if(i === 0 && val.charAt(i) - '0' < 5)
            {
                flag = false;
            }
        }
        if(flag)
        {
            span.innerHTML = "Valid Number";
            span.style.color = "green";
        }
        else
        {
            span.innerHTML = "Invalid Number";
            span.style.color = "red";
        }
    }
    else
    {
        span.innerHTML = "Invalid Number";
        span.style.color = "red";
    }
}