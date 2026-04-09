function checkEmail()
{
    let input = document.getElementById("email");
    let val = input.value;
    let result = [-1,-1,-1];
    for(let i = 0; i < val.length; i++)
    {
        if(val.charAt(i) == '@')
        {
            result[0] = 1;
        }
        else if(result[0] == 1 && val.charAt(i) === '.')
        {
            result[1] = 1;
        }
        else if(result[1] === 1 && val.charAt(i) >= 'a' && val.charAt(i) <= 'z')
        {
            result[2] = 1;
        }
    }
    let sum = 0;
    for(let i = 0; i < result.length; i++)
    {
        sum += result[i];
    }
    let span = document.getElementById("printResult");
    if(sum == 3)
    {   
        span.innerHTML = "Valid Email";
        span.style.color = "green";
    }
    else
    {
        span.style.color = "red";
        span.innerHTML = "Invalid, Enter Valid Email";
    }
}
