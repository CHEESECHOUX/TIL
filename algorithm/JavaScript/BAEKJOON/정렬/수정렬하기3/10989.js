// JS로 풀면 무슨 방법을 써도 메모리 초과 된다고 함..... JS로 풀 수 없음
const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 1. sort함수 사용
let n = input.shift();

let sort = input.sort((a, b) => a - b);

console.log(sort.join("\n"));

// 2. 계수정렬로 푼 것
let N = Number(input.shift());
let arr = input.map((x) => +x); // 문자열을 숫자로 변환
let max = Math.max.apply(null, arr); // arr에서 최댓값을 찾아 변수 max에 저장
let arrange = new Array(max);
arrange.fill(0);
let answer = "";
for (let i = 0; i < N; i++) {
  arrange[arr[i] - 1]++; // arr 배열의 각 요소들을 순회하면서 해당 요소의 값에 해당하는 인덱스의 arrange 배열 요소를 1씩 증가시킴
}

for (let i = 0; i < arrange.length; i++) {
  if (arrange[i] !== 0) {
    for (let j = 0; j < arrange[i]; j++) {
      // 값에 해당하는 횟수만큼 반복
      answer += i + 1 + "\n"; // arrange 배열의 인덱스를 실제 정수 값으로 변환하고 줄바꿈
    }
  }
}
console.log(answer);
