// n의 약수중 k번째로 작은수

const fs = require("fs");
const [n, k] = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((x) => Number(x));
// "/dev/stdin"

// n의 약수를 구하고, sort를 해서 k번째 숫자를 찾기

let answer = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    answer.push(i);
  }
}
console.log(answer[k - 1] || 0);
