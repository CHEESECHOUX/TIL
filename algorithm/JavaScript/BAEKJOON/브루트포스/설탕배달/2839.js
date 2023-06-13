/*
n킬로그램 배달 해야함
봉지는 3, 5킬로그램 봉지 총 2개

최대한 적은 봉지를 들고 가고 싶음

5킬로그램으로 먼저 나누고
나머지를 3으로 나눔

정확하게 n킬로그램을 만들 수 없다면 -1출력
*/

/*
// 첫 번째 시도: -1을 생각 안 함
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
let n = Number(input);

let firstCount = Math.floor(n / 5);
let remainder = n % 5;
let secondCount = Math.floor(remainder / 3);

console.log(firstCount + secondCount);

*/
// 두 번째 시도
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
let n = Number(input);
let count = 0;

while (n >= 0) {
  if (n % 5 === 0) {
    count += Math.floor(n / 5);
    console.log(count);
    break;
  }
  n -= 3;
  count += 1;
}

if (n < 0) {
  console.log(-1);
}
