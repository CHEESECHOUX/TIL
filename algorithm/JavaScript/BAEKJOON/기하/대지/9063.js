/*
옥구슬 위치 n개
x값 y값 (가장 큰거 - 가장작은거) 곱하기
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"
let x_list = [];
let y_list = [];

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  x_list.push(x);
  y_list.push(y);
}
const result =
  (Math.max(...x_list) - Math.min(...x_list)) *
  (Math.max(...y_list) - Math.min(...y_list));
console.log(result);
