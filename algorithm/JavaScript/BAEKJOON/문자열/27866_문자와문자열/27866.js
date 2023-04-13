const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = input[0];
let num = Number(input[1]);

let result = word.charAt(num - 1);

console.log(result);
