const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
// const input = fs.readFileSync("/dev/stdin").toString();

let phone = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
let minTime = 0;

for (let i = 0; i < input.length; i++) {
  for (let x in phone) {
    if (x.includes(input[i])) {
      // x는 phone의 key, input문자열의 각 문자와 비교
      minTime += phone[x];
    }
  }
  //console.log(minTime);
}
console.log(minTime);
