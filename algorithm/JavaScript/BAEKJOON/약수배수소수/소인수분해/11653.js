/*
소인수
인수중에 소수인 것 
*/

const fs = require("fs");
let n = Number(fs.readFileSync("input.txt").toString());
// "/dev/stdin"

let prime = [];

for (let i = 2; i <= n; i++) {
  while (n % i === 0) {
    n = n / i;
    prime.push(i);
  }
}

/*
// 다른 사람 풀이 1
let i = 2; // 소인수 찾기위한 초기값

while (true) {
  if (n % i === 0) {
    n = n / i;
    prime.push(i);
    i = 1;
  }
  i++;
  if (i > n) {
    break;
  }
}
*/

/*
// 다른 사람 풀이 2
let divider = 2;

while (n != 1) {
  if (n % divider === 0) {
    console.log(divider);
    n /= divider;
  } else {
    divider++; // n이 해당 divider로 나눠지지 않았다면 divider를 1 증가시켜서 반복
  }
}
*/

console.log(prime.join("\n"));
