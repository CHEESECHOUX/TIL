/*
n, m

n개의 줄에 집합 s에 포함되어 있는 문자열
m개의 줄에는 검사해야하는 문자열

m개의 문자열중에 총 몇 개 가 집합 s에 포함 되는지 출력
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 런타임에러 왜지...
const [n, m] = input
  .shift()
  .split(" ")
  .map((x) => Number(x));

let s = new Set(input.slice(0, n));
let candidate = input.slice(n);

let count = 0;

for (let word of candidate) {
  if (s.has(word.trim())) {
    count++;
  }
}

console.log(count);
