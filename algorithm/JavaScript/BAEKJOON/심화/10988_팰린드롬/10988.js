const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
// "/dev/stdin"

let half = input.length / 2;
let left = input.slice(0, parseInt(half));
let right = input.slice(Number.isInteger(half) ? half : parseInt(half) + 1); //half가 정수라면 그냥 전달, 정수가 아니면 1을 더해서 중간문자 포함하지 않도록
if (left === right.split("").reverse().join("")) {
  console.log(1);
} else console.log(0);
