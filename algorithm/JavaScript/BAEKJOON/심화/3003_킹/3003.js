/*
체스는 총 16개의 피스
킹 1, 퀸 1, 룩 2, 비숍 2, 나이트 2, 폰 8

1 1 2 2 2 8

주어진 피스에서 몇 개를 더하거나 빼야 되는지 출력하기
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" "); // split 함수로 배열로 분리해줘야함
// const input = fs.readFileSync("/dev/stdin").toString();

/*
let pieces = [1, 1, 2, 2, 2, 8];
let result = "";

for (let i = 0; i < 6; i++) {
  for (let k = 0; k < pieces.length; k++) {
    if (pieces[k] !== input[i]) {
      // 여기를 잘 못 생각함! 동일한 위치의 인덱스 값을 비교해야되는데, 같지 않다면 넣어버리면 다른 인덱스 값 비교할 수 있음 & 이중 포문 할 필요 없음
      result += pieces[k] - input[i];
    }
  }
}

console.log(result);
*/

let pieces = [1, 1, 2, 2, 2, 8];
let result = "";

for (let i = 0; i < 6; i++) {
  result += pieces[i] - input[i] + " ";
}

console.log(result.trim());
