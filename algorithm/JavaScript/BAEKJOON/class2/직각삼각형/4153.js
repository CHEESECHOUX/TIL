// 피타고라스 a제곱 + b제곱 = c제곱

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let nums = input[i]
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  let [a, b, c] = nums;

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  if (a ** 2 + b ** 2 === c ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
