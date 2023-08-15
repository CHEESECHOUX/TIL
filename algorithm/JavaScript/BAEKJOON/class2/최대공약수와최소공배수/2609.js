/*
// 유클리드 호제법
최대공약수 - 두 수 이상의 여러 공약수 중 최대인 수

// a, b의 곱을 최대공약수로 나누면 최소공배수
최소 공배수 - 두 수 이상의 여러수의 공배수 중 최소인 수
*/

const fs = require("fs");
const [a, b] = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let A = a;
let B = b;

while (A % B !== 0) {
  let n = A % B; // n은 나머지
  if (n !== 0) {
    A = B;
    B = n;
  }
}
console.log(B);
console.log((a * b) / B);
