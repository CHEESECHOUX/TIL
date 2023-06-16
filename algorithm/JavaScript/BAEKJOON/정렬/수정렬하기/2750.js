const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

input.shift();

input.sort((a, b) => a - b); // 정렬

// 출력하려고 for문 사용
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
