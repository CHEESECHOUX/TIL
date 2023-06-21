/*
평균, 중앙값 구하기
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let sum = 0;
let middle = 0;

for (let i = 0; i < input.length; i++) {
  sum += Number(input[i]);
}
let average = sum / input.length;

const sort = input.sort((a, b) => a - b);
middle = Math.floor(input.length / 2); // 중간 인덱스 찾기 (인덱스는 0부터 시작)

console.log(average);
console.log(sort[middle]);
