/*
A미터 올라감 
B미터 미끄러짐
V미터 나무 막대를 올라갈거야
*/

const fs = require("fs");
let [a, b, v] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));
// "/dev/stdin"

console.log(Math.ceil((v - b) / (a - b)));
