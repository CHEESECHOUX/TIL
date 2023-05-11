/*
첫째 줄에 n, b
// 60466175 36

10진법수 n
b진법으로 바꿔서 출력해라

10진법을 넘어가는 진법은 알파벳 대문자로 표시
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");
// "/dev/stdin"

let n = Number(input[0]);
let b = Number(input[1]);
let result = [];
let tmp = n;
console.log(tmp);
// tmp를 b진법으로 변환해서 result에 저장
while (tmp / b !== 0) {
  // 나눈 결과가 0이 아닐 때까지 반복 (b진법으로 변환)
  result.push(tmp % b); // 나머지를 result에 푸시
  tmp = Math.floor(tmp / b); // 모든 자릿수를 변환하고 tmp가 0이 되면 변환과정 종료
}

result = result.reverse();
for (let i = 0; i < result.length; i++) {
  if (result[i] >= 10 && result[i] <= 35) {
    result[i] = String.fromCharCode(result[i] + 55); // 변환된 숫자를 알파벳으로 표현하기 위해
  }
}
console.log(result.join("").trim());
