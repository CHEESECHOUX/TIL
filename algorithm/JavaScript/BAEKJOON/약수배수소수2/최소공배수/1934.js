const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const iter = Number(input.shift());
let answer = [];

for (let i = 0; i < iter; i++) {
  let [a, b] = input[i].split(" ").map((el) => Number(el));

  let originA = a; // 원본 값 저장해서 나중에 최소공배수 계산할 때 사용
  let originB = b;

  // 유클리드 호제법으로 최대공약수 구하기
  while (a % b !== 0) {
    let r = a % b;

    if (r !== 0) {
      a = b;
      b = r;
    }
    // r이 0이 아니면 a에는 이전의 b값, b에는 r값 대입 => 이전 단계의 나머지 값, 새로운 나머지 값으로 갱신
    // 이 과정을 반복해 r(나머지)이 0이 되면 b가 최대공약수가 됨
  }
  console.log(a, b);
  // 최소공배수 = 두 수의 곱을 최대공약수(b)로 나눈 값
  let min = (originA * originB) / b;
  answer.push(min);
}

console.log(answer.join("\n"));

/*
최소공배수를 구하기 위해서는
1. 최대공약수를 먼저 구함
2. 유클리드 호제법을 사용해 두 수의 약수를 구하고
3. 두 수의 곱에 약수를 나눠주면 = 최소공배수
*/
