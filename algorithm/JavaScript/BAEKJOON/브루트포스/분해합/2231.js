/*
하나씩 다 구해봐야 되는 듯

생성자가 없을 수도 있다 
생성자가 여러개인 자연수도 있을 수 있다

m + a + b + c = n
*/

const fs = require("fs");
let n = fs
  .readFileSync("input.txt")
  .toString()
  .split("")
  .map((x) => Number(x));

/*
// 첫번째 풀이 : 시간초과

// m 최댓값
m + 9 + 9 + 9 = 216 
m은 189 이하

let start = n - String(n).length * 9;
let m = start;
let answer = 0;

while (true) {
  m++;
  let sum = m;
  for (let i = 0; i < String(m).length; i++) {
    sum += Number(String(m).charAt(i));
  }
  if (sum === n) {
    answer = m;
    break;
  }
  if (m >= n) {
    answer = 0;
    break;
  }
}
console.log(answer);
*/

let m = 0;
for (let i = 0; i < n; i++) {
  let sum = 0; // 각자리수의 합

  const candidate = i;

  const candidateStr = candidate.toString();

  for (let j = 0; j < candidateStr.length; j++) {
    sum += Number(candidate[j]); // candidateStr 각 자리수의 값을 더함
  }

  sum += candidate; // 각자리수 + 후보값

  if (sum == n) {
    m = candidate;
    break;
  }
}
console.log(m);
