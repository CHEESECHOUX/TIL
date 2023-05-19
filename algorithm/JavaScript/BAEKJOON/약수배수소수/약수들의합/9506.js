/*
완전수
n 자신을 제외한 모든 약수들의 합 = n의 값

6 = 1 + 2 + 3
12 is NOT perfect.
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"

for (let i = 0; i < input.length; i++) {
  if (input[i] % i == 0) {
    const n = parseInt(input[i]); // -1이면 입력이 더이산 없다는 뜻

    if (n === -1) {
      break;
    }

    let divisor = [];
    let sum = 0;

    for (let j = 1; j < n; j++) {
      if (n % j === 0) {
        divisor.push(j);
        console.log(divisor);
        sum += j;
      }
    }

    if (sum === n) {
      console.log(`${n} = ${divisor.join(" + ")}`);
    } else {
      console.log(`${n} is NOT perfect.`);
    }
  }
}
