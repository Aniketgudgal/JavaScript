function show()
{
    let ans = [
        ['1','2','3','+'],
        ['4','5','6','-'],
        ['7','8','9','*'],
        ['0','.','/','=']
    ];
    let table = document.getElementById("tbdata");
    table.style.margin="auto";
    for(let i = 0; i < ans.length; i++)
    {
        let trbtn = document.createElement("tr");
        for(let j = 0; j < ans[i].length;j++)
        {
            let bnt = document.createElement("td");
            let inp = document.createElement("input");
            inp.setAttribute("type","button");
            inp.setAttribute("value",""+ans[i][j]);
            inp.style.width="100px";
            inp.style.fontSize= "1.5em";
            inp.style.textAlign="center";
            inp.style.height="100px";
            inp.addEventListener("click",() =>{
                let val = document.getElementById("txt");
                let prev = val.value;
                val.value= prev+""+ans[i][j];
            })
            bnt.appendChild(inp);
            trbtn.append(bnt);
        }
        table.appendChild(trbtn);
    }
}
function clearText()
{
    let val = document.getElementById("txt");
    val.value = "";
}