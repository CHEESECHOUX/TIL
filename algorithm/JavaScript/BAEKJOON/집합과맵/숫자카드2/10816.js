/*
상근이가 갖고있는 숫자카드 N개
M개 중에서 상근이가 갖고있는 숫자카드는 몇 개인가 

N
상근이 카드
M
체크해야될 카드
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

/*
const N = Number(input[0]);
const M = Number(input[2]);
let hasCard = new Map(input[1].split(" ").map((el) => Number(el)));
let checkCard = input[3].split(" ").map((el) => Number(el));

// 요소 N개의 배열 만들기
let answer = [];

for (let i = 0; i < M; i++) {
  if (sanggunCard.has(checkCard[i])) {
    // 갖고있으면 해당 요소의 인덱스 +1
    answer;
  }
}
*/
const N = Number(input.shift());
const hasCard = input.shift().split(" ");
const M = Number(input.shift());
const checkCard = input.shift().split(" ");

let answer = [];

let hasCardMap = new Map(); // { 6: 1, 3: 2, 2: 1, 10: 2, -10: 1, 7: 1 }
for (num of hasCard) {
  if (hasCardMap.has(num)) {
    hasCardMap.set(num, hasCardMap.get(num) + 1); // 이미 등록되어있으면 등록되어있는 값에 +1
  } else {
    hasCardMap.set(num, 1); // 등록 안 되어있으면 등록 후 1
  }
}

for (num of checkCard) {
  if (hasCardMap.has(num)) {
    answer.push(hasCardMap.get(num)); // hasCardMap.get(10)을 통해 10의 등장 횟수를 가져오고, 등장 횟수를 answer 배열에 추가
  } else {
    answer.push(0); // 상근이가 안 갖고 있으면 false = 배열에 0 추가
  }
}

console.log(answer.join(" "));
