// 10818 최소, 최대

/*
// 첫번째
let arr = input[1].split(" ").map((x) => Number(x));

let max = Math.max(arr);
let min = Math.min(arr); // 배열 내의 요소들중에 가장 큰 값이 아니라, 인자들 중에서 가장 큰 값을 찾음 -> NaN
*/

// 다시 for문으로
let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map((x) => Number(x));

let result = [];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < n; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min);
console.log(max);

result.push(min, max);
console.log(result.join(" "));
