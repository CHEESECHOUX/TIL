/*
81개의 자연수 또는 0
최댓값이 몇행 몇열에 위치한지 구하기
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"

/*
// 최댓값 구하는 것만 하고
let maxNum = 0;
let row = 0;
let col = 0;

for (let i = 0; i < input.length; i++) {
  let newArr = input[i].split(" ");

  newArr = newArr.map((number) => Number(number));
  // console.log(newArr);
  let maxNums = Math.max(...newArr);
  maxNum = Math.max(maxNum, maxNums);

  console.log(maxNum);
}
*/

// 행, 열 찾는 건 답안 봄
let maxNum = -1; // 모든 수가 0일 때를 고려해야함
let row = 0;
let col = 0;

for (let i = 0; i < input.length; i++) {
  let newArr = input[i].split(" ");

  newArr = newArr.map((number) => Number(number));
  // console.log(newArr);
  let maxNums = Math.max(...newArr);
  if (maxNums > maxNum) {
    // 현재 행에서 최댓값과 이전까지의 최댓값 비교 (maxNum을 -1로 설정해야 모든 수가 0일 경우에 maxNums 최댓값 위치를 올바르게 찾을 수 있음)
    maxNum = maxNums;
    row = i + 1;
    col = newArr.indexOf(maxNums) + 1;
  }
}

console.log(maxNum);
console.log(row, col);
