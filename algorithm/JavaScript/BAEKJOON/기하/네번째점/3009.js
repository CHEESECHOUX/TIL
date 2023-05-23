/*
축에 평행한 직사각형

x, y 
한 번만 있으면 그게 정답
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// /dev/stdin

let x = [];
let y = [];

for (let i = 0; i < 3; i++) {
  x.push(Number(input[i].split(" ")[0]));
  y.push(Number(input[i].split(" ")[1]));
}
x = x.sort(); // 정렬하고
y = y.sort();

let a = x[0] === x[1] ? x[2] : x[0]; // 요소 0, 1 같으면 두 번 등장한거니까 2번째 요소
let b = y[0] === y[1] ? y[2] : y[0];

console.log(a, b);
