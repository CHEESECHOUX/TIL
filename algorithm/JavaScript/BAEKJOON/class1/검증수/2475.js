const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let nums = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  nums.push(input[i] ** 2);
}

nums.forEach((num) => {
  sum += num;
});

console.log(sum % 10);
