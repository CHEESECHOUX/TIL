/*
수행 횟수
수행 시간
*/

const fs = require("fs");
let n = fs.readFileSync("input.txt").toString();

function MenOfPassion(A, n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += A[i];
  }
  return answer;
}

console.log(n); // for 문은 항상 n번
console.log(1); // 최고차항의 차수가 1 = 주어진 코드의 반복문이 입력 크기에 비례해 실행되기 때문
// O(n)
