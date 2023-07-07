/*
첫째 줄 - n 상근이가 갖고 있는 숫자 카드 개수
둘째 줄 - 숫자 카드에 적혀있는 정수
셋째 줄 - m 
넷째 줄 - 상근이가 갖고 있는 건지 아닌지 구해야될 정수

갖고 있으면 1, 아니면 0 // 공백으로 구분해 출력
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

/*
// 배열로 하나하나 풀었더니 시간초과
const n = Number(input[0]);
let sanggune = input[1]
  .trim()
  .split(" ")
  .map((x) => Number(x));

const m = Number(input[2]);
let check = input[3]
  .trim()
  .split(" ")
  .map((x) => Number(x));

let hasCard = [];
let checkCard = [];

for (let i = 0; i < n; i++) {
  hasCard.push(sanggune[i]);
}

for (let j = 0; j < m; j++) {
  checkCard.push(check[j]);
}

let answer = "";
for (let k = 0; k < m; k++) {
  if (hasCard.includes(checkCard[k])) {
    answer += 1 + " ";
  } else {
    answer += 0 + " ";
  }
}

console.log(answer);
*/

const [n, m] = [Number(input[0]), Number(input[2])];
let hasCard = new Set(input[1].split(" ").map((x) => Number(x)));
let checkCard = input[3].split(" ").map((x) => Number(x));

let answer = "";
for (let i = 0; i < m; i++) {
  if (hasCard.has(checkCard[i])) {
    answer += 1 + " ";
  } else {
    answer += 0 + " ";
  }
}
console.log(answer);
