/*
모르겠어서... 정답 봄
"(" 기호면 1더하고 ")" 기호면 1빼기
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const length = input.shift();
const result = [];

for (let i = 0; i < length; i++) {
  let count = 0; // 각 문자열에서 '('와 ')'의 갯수를 비교하기 위한 초기화

  for (let j of input[i]) {
    count += j === "(" ? 1 : -1;

    if (count < 0) break; // 0보다 작으면 괄호의 짝이 안 맞으니까 반복문 종료
  }

  result.push(count === 0 ? "YES" : "NO"); // count가 0이면 괄호의 짝이 맞으니까
}
console.log(result.join("\n"));
