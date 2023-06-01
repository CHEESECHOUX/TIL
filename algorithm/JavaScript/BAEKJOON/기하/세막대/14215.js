// 작은 두 변의 길이의 합이 제일 긴 변의 길이보다 커야함

const fs = require("fs");
let [a, b, c] = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((x) => Number(x))
  .sort((a, b) => a - b);
// "/dev/stdin"

while (true) {
  if (a + b > c) {
    console.log(a + b + c);
    break;
  } else if (a + b <= c) {
    c -= 1;
  }
}
