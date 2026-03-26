var i = 0;
let a = ["./images/abc.jpg","./images/pqr.jpg","./images/mno.jpg","./images/pqr12.jpg","./images/abc1.jpg"];
function showImage()
{
   let im = document.getElementById("imgShow");
    im.src = a[i];
}
function prev()
{
    i--;
    if(i < 0)
    {
        i = a.length - 1;
    }
    showImage();
}
function next()
{
    i++;
    if(i >= a.length)
    {
        i = 0;
    }
    showImage();
}