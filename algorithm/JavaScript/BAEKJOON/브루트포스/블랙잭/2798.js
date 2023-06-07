/*
블랙잭 규칙

카드의 합이 21을 넘지 않는 한도 내에서 카드의 합을 최대한 크게 만듦

김정인, 상근이, 창영이 

n장의 카드를 모두 숫자가 보이도록 바닥에 놓음 / m을 외침

n장의 카드 중 3장의 카드를 고르는데, 
m을 넘지 않으면서 m과 최대한 가까운 수
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map((x) => Number(x));
let nums = input[1].split(" ").map((x) => Number(x));
nums.sort((a, b) => b - a);

/*
// 처음 생각한 방법(정답 아님)
arr 값과 nums[i]를 더한 값이 m보다 작으면 arr에 넣는 걸로 구현했는데
백준에서 요구한 것은 **세 개의 숫자**를 선택해 그 합이 m을 넘지 않는 거였음

let arr = [];

for (let i = 0; i < n; i++) {
  if (arr.reduce((sum, num) => sum + num, 0) + nums[i] < m) {
    arr.push(nums[i]);
  }
}
*/

/*
// 정답 봄 : 냅다 반복문 돌리는 문제

반복문 돌리면 이런식으로 됨
[0][1][2] 5 6 7 = 18
[0][1][3] 5 6 8 = 19
[0][1][4] 5 6 9 = 20
[0][2][3] 5 7 8 = 20
[0][2][4] 5 7 9 = 21
[0][3][4] 5 8 9 = 22
[1][2][3] 6 7 8 = 21 // 정답
[1][2][4] 6 7 9 = 22
[1][3][4] 6 8 9 = 23
[2][3][4] 7 8 9 = 24
*/
let maxSum = 0;

for (let i = 0; i < n - 2; i++) {
  // 첫 번째 숫자 선택
  for (let j = i + 1; j < n - 1; j++) {
    // 두 번째 숫자 선택
    for (let k = j + 1; k < n; k++) {
      // 세 번째 숫자 선택
      let sum = nums[i] + nums[j] + nums[k];
      if (sum <= m && sum > maxSum) {
        maxSum = sum;
      }
    }
  }
}
console.log(maxSum);
