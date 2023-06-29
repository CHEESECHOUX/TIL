const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift());
let arr = [];

// 2차원 배열 생성
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map((x) => Number(x)));
}

// 2차원 배열 오름차순
// arr[0][0]과 arr[1][0], arr[1][0]과 arr[2][0]...
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let answer = [];

// 정렬한 배열 문자열로 바꾸기
for (let i = 0; i < n; i++) {
  let xy = arr[i].join(" ");
  answer.push(xy);
}

// console.log(arr.join("\n"));
console.log(answer.join("\n"));
