function checkData()
{
    let dv = document.getElementById("access");
    let val = dv.value;
    let msg = document.getElementById("msg");
    let spn = document.createElement("span");
    spn.style.marginBottom = "15px";
    let lname = document.getElementById("sname").value;
    lname = lname[0];
    if(val.length == 10)
    {
        let arr = new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
        for(let i = 0; i < val.length; i++)
        {
            if(val.charAt(i) >= 'A' && val.charAt(i) <= 'Z' && i < 3)
            {
                arr[i] = 1;
            }
            else if(val.charAt(i) >= 'A' && val.charAt(i) <= 'Z' && i == 3 && val.charAt(i) == lname)
            {
                arr[i] = 1;
            }
            else if(val.charAt(i) >= '0' && val.charAt(i) <= '9' && i <= 8)
            {
                arr[i] = 1;
            }
            else if(val.charAt(i) >= 'A' && val.charAt(i) <= 'Z' && (i == val.length - 1))
            {
                if(val.charAt(i) == lname)
                {
                    arr[i] = 1;
                }   
            }
        }
        let sum = 0;
        for(let i = 0; i < arr.length; i++)
        {
            sum += arr[i];
        }
    
        if(sum == arr.length)
        {
            msg.innerHTML = "";
            spn.innerText = "Valid Pan Number";
            spn.style.color = "green";
            msg.appendChild(spn);
        }
        else
        {
            msg.innerHTML = "";
            spn.innerText = "Invalid Number";
            spn.style.color = "red";
            msg.appendChild(spn);
        }
    }
    else
    {
        msg.innerHTML = "";
        spn.innerText = "Invalid Number";
        spn.style.color = "red";
        msg.appendChild(spn);
    }
    
}