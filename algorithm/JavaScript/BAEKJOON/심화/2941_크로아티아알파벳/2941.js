const fs = require("fs");
// const readFileSyncAddress = '/dev/stdin';
const readFileSyncAddress = "input.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().trim();

const cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

/*
let answer = 0;
let word = input[0];

for (let i = 0; i < cro.length; i++) {
  while (input !== input.replace(cro[i], "")) {
    answer += 1;
    word = word.input.replace(cro[i], " ");
  }
  console.log(answer);
}
*/

function solution(input) {
  for (let a of cro) {
    input = input.split(a).join("a");
  }
  return input.length;
}
console.log(solution(input));
