const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
// const input = fs.readFileSync("/dev/stdin").toString();

let [a, b] = input
  .trim()
  .split(" ")
  .map((x) => [...x].reverse().join(""));

console.log(a > b ? a : b);

/*
input 변수에 hello world가 할당된다면

input.trim().split(" ")은 ["hello", "world"] 배열 반환
이 배열에 .map((x) => [...x].reverse().join(""))을 적용하면
["olleh", "dlrow"] 배열 생성
*/
