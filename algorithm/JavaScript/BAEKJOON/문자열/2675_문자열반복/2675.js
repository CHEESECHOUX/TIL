/*
문자열 S를 입력받고
각 문자를 R번 반복해 새문자열 P 만들기

P출력
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString();

const num1 = input.shift(); // 첫번쨰 값을 num1변수에 할당하고, input 배열에서 해당 값을 제거

for (let i = 0; i < num1; i++) {
  let answer = "";

  const [num2, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    // 문자열 길이만큼
    for (let k = 0; k < num2; k++) {
      // num2길이만큼 반복해서 추가
      answer += str[j];
    }
  }
  console.log(answer);
}
