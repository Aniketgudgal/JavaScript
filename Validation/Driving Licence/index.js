function validateNum()
{
    //01 23 4567   8 9 10 11 12 13 14 
    let val = document.getElementById("ac").value;
    let firstVal = val.substring(0,2);
    let secondVal = val.substring(2,4);
    let thirdVal = val.substring(4,8);
    let fourthVal = val.substring(8,15);
    if(val.length == 15)
    {
        let flag = false;
        for(let i = 0; i < firstVal.length; i++)
        {
            if(!(firstVal.charAt(i) >= 'A'&& firstVal.charAt(i) <= 'Z'))
            {
               flag = true;
            }
        }
        for(let i = 0; i < secondVal.length; i++)
        {
            if(!(secondVal.charAt(i) >= '0' && secondVal.charAt(i) <= '9'))
            {
                flag = true;
            }
        }
        for(let i = 0; i < thirdVal.length; i++)
        {
            if(!(thirdVal.charAt(i) >= '0' && thirdVal.charAt(i) <= '9'))
            {
               flag = true;
            }
        }
        for(let i = 0; i < fourthVal.length-1; i++)
        {
            for(let j = i+1; j <fourthVal.length; j++)
            {
                if(fourthVal.charAt(i) == fourthVal.charAt(j))
                {
                    flag = true;
                    break;
                }
            }
            if(!flag)
            {
                break;
            }
        }
        if(flag)
        {
            let btn = document.getElementById("change");
            btn.style.backgroundColor = "red";
            alert("Invalid Number");
        }
        else
        {
            let validate = document.getElementById("showData");
            validate.innerHTML = "Valid Number";

        }
    }
    else
    {
        alert("Invalid input");
    }
}