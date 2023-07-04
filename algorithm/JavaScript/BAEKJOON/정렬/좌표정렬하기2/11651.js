const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = Number(input.shift());
let arr = [];

// 2차원 배열 만드는 거 자꾸 잊어버림
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map((x) => Number(x)));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let answer = [];

for (let i = 0; i < n; i++) {
  let xy = arr[i].join(" ");
  answer.push(xy);
}

console.log(answer.join("\n"));
