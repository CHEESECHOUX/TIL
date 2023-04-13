const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let nums = input[1].split("").map((x) => Number(x));
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += Number(nums[i]); // 아 이거 생각 왜 못했지
}
console.log(sum);
