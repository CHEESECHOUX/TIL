const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("")
  .map((x) => Number(x));

let sort = input.sort((a, b) => b - a);
console.log(sort.join("")); // 배열 원소를 한 번에 이어붙여서 출력해야함
