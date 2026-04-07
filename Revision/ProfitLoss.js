/*
Profit or Loss
Logic:
Compare selling price (SP) and cost price (CP).
Example:
Input: CP=100, SP=120
Output: Profit = 20
*/
let cp = 140;
let sp = 200;
if(sp - cp > 0)
{
	console.log("Profit: "+(sp - cp));
}
else
{
	console.log("Loss is: "+(sp - cp));
}