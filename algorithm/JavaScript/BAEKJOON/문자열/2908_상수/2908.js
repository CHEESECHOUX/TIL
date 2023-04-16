const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b] = input.map((x) => [...x].reverse().join(""));

console.log(a > b ? a : b);
