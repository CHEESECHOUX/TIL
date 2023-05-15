/*
n번 거친 후 점 몇 개를 저장해야되는지

4 9 25 81 // 점의 개수
2 3 5 9 // *제곱수
*/

const fs = require("fs");
const n = fs.readFileSync("input.txt").toString();
// "/dev/stdin"

let first = 2;
let result = 0;

for (let i = 0; i < n; i++) {
  first += Math.pow(2, i);
}
console.log(Math.pow(first, 2));

/*
첫 번째 반복: first = first + Math.pow(2, 0) = 2 + 1 = 3)
두 번째 반복: first = first + Math.pow(2, 1) = 3 + 2 = 5)
세 번째 반복: first = first + Math.pow(2, 2) = 5 + 4 = 9)
*/
