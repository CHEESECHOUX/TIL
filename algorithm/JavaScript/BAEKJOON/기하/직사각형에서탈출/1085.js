/*
직사각형의 경계선까지 가는 거리의 최솟값

(0,0) (w, h)로 된 직사각형 안 (x, y)위치에 한수가 있음

위 아래 왼쪽 오른쪽
*/

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((x) => Number(x));
// "/dev/stdin"
let [x, y, w, h] = input;

let array = [h - y, y, w - x, x]; // 위, 아래, 오, 왼
let answer = Math.min(...array);
console.log(answer);
