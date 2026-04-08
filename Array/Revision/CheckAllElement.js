/*
Check All Positive
Problem: Check if all numbers in [1,2,3] are positive using .every().
*/
let num = [1,2,3,4,5];
let result = num.every((v) => v > 0);
console.log(result);