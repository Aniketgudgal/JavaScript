/*
Check Some Negative
Problem: Check if some numbers in [1,-2,3] are negative using .some().
*/
let num = [1,2,3,4,3,-1];
let result = num.some((s) => s < 0);
console.log(result);