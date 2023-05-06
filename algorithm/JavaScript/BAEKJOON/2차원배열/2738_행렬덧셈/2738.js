/*
두 개의 행렬 a, b 더하기


첫째 줄에 행렬의 크기 n, m
둘째 줄부터 n개의 줄에 행렬 A의 원소 m개
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"

// 입력값
const [n, m] = input[0].split(" ").map(Number);
let A = [];
let B = [];

for (let i = 1; i < input.length; i++) {
  let newArr = input[i].split(" ");

  newArr = newArr.map((item) => Number(item)); // 문자열 숫자로 변환

  if (i <= n) {
    A.push(newArr);
  } else {
    B.push(newArr);
  }
}

// 풀이
function solution(n, m, A, B) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    // 새로운 행 i 추가
    answer.push([]);
    for (let j = 0; j < m; j++) {
      answer[i].push(A[i][j] + B[i][j]); // 현재 처리중인 행 i의, 행렬 A에서 i번째 행 j번째 열에 있는 원소와 B[i][j]는 행렬 B에서 i번째 행 j번째 열에 있는 원소 더하기
    }
  }
  return answer;
}

// 출력
let answerStr = "";
let answerMatrix = solution(n, m, A, B);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answerStr += `${answerMatrix[i][j]}`; // 문자열 형태로 저장
  }
  answerStr += `\n`; // 줄바꿈 문자열로 다음줄에 출력 되도록
}
console.log(answerStr);
