/*
쿼터 0.25 
다임 0.10
니켈 0.05
페니 0.01 

거스름돈은 항상 5.00이하
손님이 받는 동전의 개수를 최소로 하려고함

//
첫째 줄에 테스트 케이스 개수 T
거스름돈 C를 나타내는 정수
*/
const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((x) => Number(x));
// "/dev/stdin"

const t = input[0];

for (let i = 1; i <= t; i++) {
  // (let i = 1; i <= +input[0]; i++)
  const quarter = Math.floor(input[i] / 25);
  const dime = Math.floor((input[i] - quarter * 25) / 10);
  const nickel = Math.floor((input[i] - quarter * 25 - dime * 10) / 5);
  const penny = input[i] % 5;

  console.log(quarter, dime, nickel, penny);
}
