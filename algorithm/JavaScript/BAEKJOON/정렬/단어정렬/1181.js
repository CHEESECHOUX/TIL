/*
n개의 단어
1. 길이가 짧은 것 부터
2. 길이가 같으면 사전 순으로
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift());

input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b); // localeCompare() 문자열 비교 함수
});

const set = new Set(input);
console.log(set);
console.log(Array.from(set).join("\n")); // 객체를 배열로 변환
