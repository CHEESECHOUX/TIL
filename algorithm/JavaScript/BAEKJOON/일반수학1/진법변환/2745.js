/*
B진법 수 N이 주어짐
10진법을 넘어가는 진법은 알파벳 대문자 사용

10진법으로 바꿔 출력
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");

let char = input[0].split("").reverse(); // 진법 변환 과정에서는 가장 오른쪽 자릿수부터 처리해야되니까 reverse시킴
let b = Number(input[1]);
let result = 0;

for (let i = 0; i < char.length; i++) {
  if (char[i] >= "A" && char[i] <= "Z") {
    // 현재 자릿수의 문자가 알파벳이라면
    char[i] = char[i].charCodeAt(0) - 55; // 알파벳 대문자인 경우, A의 유니코드 값이 65니까 -55 해주면 10됨
    result += char[i] * Math.pow(b, i); // 가중치 계산 (10진수의 경우 첫 번째 자릿수는 1의 가중치, 두 번째 자릿수는 10의 가중치, 세 번째 자릿수는 100)
  } else {
    char[i] = Number(char[i]); // 알파벳 대문자가 아닌 경우
    result += char[i] * Math.pow(b, i); // 현재 자릿수의 값을 가중치와 곱하기
  }
}
console.log(result);
