// swapping numbers and sort Array

let a = [2,3,5,2,5,6];
console.log("Before sorting: "+a)
for(let i = 0; i < a.length -1 ; i++)
{
    for(let j = i+1; j < a.length; j++)
    {
        if(a[i] > a[j])
        {
            [a[i], a[j]] = [a[j],a[i]];
        }
    }
}
console.log("After sorting: "+a);