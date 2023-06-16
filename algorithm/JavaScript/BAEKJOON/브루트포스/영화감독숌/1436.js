/*
문제를 잘 못 이해함

*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

// 제목 찾기1 : input값이 0이 될 때까지 반복
let title = 666;

while (true) {
  if (title.toString().includes("666")) {
    input -= 1;
    if (input == 0) break;
  }
  title += 1;
}
console.log(title);

// 제목 찾기2 : count변수가 input값과 동일해질 때까지 반복
let count = 0;
let title2 = 0;

while (count < input) {
  title2++;
  if (title2.toString().includes("666")) {
    count++;
  }
}
console.log(title2);

/*
// 변형해서 제목을 입력하고 몇 번째 영화인지 찾고 싶을 경우
let count = 0;
let title = 0;

while (count < input) {
  title++;
  if (title.toString().includes("666")) {
    count++;
  }
}
console.log(count);
*/
