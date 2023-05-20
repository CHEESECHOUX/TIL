/*
m이상 n이하의 자연수 중 소수인 것을 모두 고르기
그 값들의 합과 최솟값 찾기
*/

const fs = require("fs");
const [n, m] = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((x) => Number(x));
// "/dev/stdin"

let prime = [];

// n부터 m까지의 숫자에서 소수 찾기
for (let i = n; i <= m; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && i > 1) {
    prime.push(i);
  }
}

console.log(prime);

if (prime.length === 0) {
  console.log(-1);
} else {
  console.log(
    prime.reduce(function add(sum, val) {
      return sum + val;
    })
  );
  console.log(Math.min(...prime));
}
