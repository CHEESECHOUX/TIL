const fs = require("fs");
const n = fs
  .readFileSync("input.txt")
  .toString()
  .split("")
  .map((x) => Number(x));
// "/dev/stdin"

console.log(n ** 2);
console.log(2);

// 이중 for문이니까 시간복잡도 n^2인데.. 왜 정답 아니지..?
