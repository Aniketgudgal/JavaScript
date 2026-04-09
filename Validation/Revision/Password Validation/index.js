function checkPass()
{
    let input = document.getElementById("pass");
    let val = input.value;
    let span = document.getElementById("output");
    if(val.length > 7)
    {
        let check = [-1,-1,-1,-1];
        for(let i = 0; i < val.length; i++)
        {
            if(val.charAt(i) >= '0' && val.charAt(i) <= '9')
            {
                check[0] = 1;
            }
            else if(val.charAt(i) >= 'a' && val.charAt(i) <= 'z')
            {
                check[1] = 1;
            }
            else if(val.charAt(i) >= 'A' && val.charAt(i) <= 'Z')
            {
                check[2] = 1;
            }
            else
            {
                check[3] = 1;
            }
        }
        let sum = 0;
        for(let v of check)
        {
            sum += v;
        }
        if(sum === 4)
        {
            span.innerHTML = "Strong Password";
            span.style.color = "green";
        }
        else
        {
            span.innerHTML = "required Strong Password";
            span.style.color = "red";
        }
    }
    else
    {
        span.innerHTML = "Must Requried 8 Digits";
        span.style.color = "red";
    }
}