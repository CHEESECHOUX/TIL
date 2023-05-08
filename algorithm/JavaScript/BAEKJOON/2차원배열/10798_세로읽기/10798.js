/*
대문자 A~Z, 소문자 a~z, 숫자 0~9

한 줄의 단어는 최대 15개의 글자

이렇게 만든 글자를 세로로 읽기
글자가 없으면 다음글자로 읽기
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// "/dev/stdin"

const maxLength = Math.max(...input.map((i) => i.length));
let vertical = "";

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    vertical += input[j][i] || "";
  }
}
console.log(vertical);
