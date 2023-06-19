/*
n개의 단어
1. 길이가 짧은 것 부터
2. 길이가 같으면 사전 순으로
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

//
// 첫 번째 풀이
const n = Number(input.shift());

input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b); // localeCompare() 문자열 비교 함수
});

const set = new Set(input);
console.log(Array.from(set).join("\n")); // set객체를 배열로 변환

//
// 두 번째 풀이
const N = Number(input.shift());
const sorted = [];
const lengthArr = input.map((str) => str.length);
const max = Math.max.apply(null, lengthArr);
const min = Math.min.apply(null, lengthArr);

for (let i = min; i <= max; i++) {
  const group = [];
  for (let j = 0; j < N; j++) {
    if (input[j].length === i) {
      // input배열의 j번재 요소의 문자열 길이가 i와 같다면
      if (group.indexOf(input[j]) === -1) group.push(input[j]); // group 배열에 input[j]가 존재하지 않는다면, group 배열에 input[j] 추가
    }
  }
  if (group.length > 1) {
    sorted.push(...group.sort()); // group 배열이 2개 이상 요소를 갖는 경우, 배열 정렬
  } else {
    sorted.push(...group); // 아니면 그냥 추가
  }
}
console.log(sorted.join("\n"));
