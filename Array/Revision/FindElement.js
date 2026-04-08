/*
Find a Number
Problem: Find first number greater than 10 in [5,12,8,20] using .find().
*/

let num = [8,12,8,20];
let result = num.find((val) => val > 10);
console.log(result);