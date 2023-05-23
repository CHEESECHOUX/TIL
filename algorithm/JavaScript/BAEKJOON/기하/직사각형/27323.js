const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a * b);
