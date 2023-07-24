const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"

let n = Number(input[0]);
let nums = input[1].split(" ").map((x) => Number(x));

// 소수를 직접 추출하는 대신, 각 숫자를 반복문으로 순회하면서 해당 숫자가 소수인지 확인하는 함수
function isPrime(num) {
  // 2보다 작은 수는 소수가 아니니까
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // 해당 숫자로 나누어지는 값이 있으면 소수가 더 있는거니까
      return false;
    }
  }
  return true;
}

// let count = 0;
// for (let i = 0; i < n; i++) {
//   if (isPrime(nums[i])) {
//     // 여기서 isPrime함수 호출 / i번째 요소가 num이 되는 것
//     count++;
//   }
// }
// console.log(count);

console.log(nums.filter((v) => isPrime(v)).length);

/*
n이 소수인지 판별하기 위해서는 2부터 n-1까지 모든 수로 n을 나누어보는 방식이 있지만
n을 나누는 가장 큰 수는 n의 절반인 n/2임

n이 a * b 형태로 나타날 수 있는데, a와 b 중 적어도 하나는 n의 제곱근보다 작을 것임!
그래서 제곱근까지만 나누어 보는 것!
ex) n = 36, a = 6, b = 6
*/
