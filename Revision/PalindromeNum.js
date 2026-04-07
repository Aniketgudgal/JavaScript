/*
Palindrome
Logic:
Reverse number and compare with original.
Example:
Input: 121
Output: Palindrome
*/
let num = 121;
let temp = num;
let rev = 0;
while(temp > 0)
{
	rev = rev*10 + temp % 10;
	temp = Math.round(temp / 10);
}
if(rev === num)
{
	console.log("Given Number is palindrome");
}
else
{
	console.log("Not a palindrome");
}