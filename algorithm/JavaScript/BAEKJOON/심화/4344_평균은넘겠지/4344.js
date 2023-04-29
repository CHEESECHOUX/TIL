/*
let testCount = Number(input[0]);
let student = Number(input[1]);

for (let i = 1; i < testCount + 1; i++) {
  let scores = input[i].split(" ").map((x) => Number(x));
  for (let j = 0; j < i[0]; j++) {
    let average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(average);
  }
}
*/
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// "/dev/stdin"

let testCount = Number(input[0]);

for (let i = 1; i <= testCount; i++) {
  let scores = input[i].split(" ").map((x) => Number(x));
  let studentCount = scores[0];
  let average =
    scores.slice(1).reduce((acc, cur) => acc + cur, 0) / studentCount; // 첫번째 인덱스 값을 제외한 평균값

  let aboveAvgCount = scores.slice(1).filter((score) => score > average).length; // 평균보다 높은 점수 필터링해서 length로 개수를 구함
  let aboveAvgRatio = (aboveAvgCount / studentCount) * 100; // 평균보다 높은 점수의 비율 계산
  console.log(aboveAvgRatio.toFixed(3) + "%");
}
