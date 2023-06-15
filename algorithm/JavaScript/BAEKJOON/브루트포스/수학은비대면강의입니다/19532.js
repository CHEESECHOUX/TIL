/*
-999부터 999까지 다 for문 돌리는 건가
*/

// 출력 초과?
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();
let [a, b, c, d, e, f] = input.split(" ").map((x) => Number(x));

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y == c && d * x + e * y == f) {
      console.log(x, y);
      break;
    }
  }
}

// 다른 사람 풀이: 연립방정식 문제에는 가감법을 사용하면 더 좋다고 함
let x = (c * e - b * f) / (a * e - b * d);
let y = (c * d - a * f) / (b * d - a * e);
