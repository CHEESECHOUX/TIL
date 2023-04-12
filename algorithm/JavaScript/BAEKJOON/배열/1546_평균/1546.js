/*
//* 조작보이 세준이

m = 자기 점수 중에 최댓값

모든 점수를 수정
점수/m * 100
점수/최댓값 *100

새로운 평균 구하기

//* input
n 시험 본 과목의 개수
점수
*/

/*
let count = Number(input[0]);
let score = input[1].split(" ").map((x) => Number(x));
let answer = new Array(count);

let sort = score.sort();
let maxScore = sort[sort.length - 1];
console.log(sort, maxScore);

for (let i = 0; i < count; i++) {
  answer.push((score[i] / maxScore) * 100); // 여기부터 모르겠 하나씩이 아니라 다 합친 평균인데
}
console.log(answer);
*/

//
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0] * 1;
let score = input[1].split(" ");

let maxScore = Math.max(...score);
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += (score[i] / maxScore) * 100; // 오...
}
console.log(sum / count);
