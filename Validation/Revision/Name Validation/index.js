function checkInput()
{
    let input = document.getElementById("nameTag");
    let val = input.value.toLowerCase();
    if(val.length > 2 && val.length <=30)
    {
        let flag = true;
        for(let i = 0; i < val.length; i++)
        {
            if(!(val.charAt(i) >= 'a' && val.charAt(i) <= 'z'))
            {
                flag = false;
                break;
            }
        }
        let span = document.getElementById("display");
        if(flag)
        {
            span.style.color = "green";
            span.innerHTML = "Valid Name";
        }
        else
        {   
            span.innerHTML = "Invalid Input";
            span.style.color = "red";
        }
    }
    else
    {
        let span = document.getElementById("display");
        span.innerText = "";
        span.innerText = "Name must be min 2 to max 30 character";
        span.style.color = "red";
    }

}