/*
n 듣지 못한 사람, m 보지 못한 사람
사람이름 쭉 알파벳

n, m 두 개 다 해당하는 사람 수, 이름 사전순으로 출력
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// set으로 교집합을 이용해서 구현
const [n, m] = input.shift().split(" ");

const nSet = new Set();
const mSet = new Set();

for (let i = 0; i < input.length; i++) {
  if (i < n) {
    nSet.add(input[i]);
  } else {
    // n보다 클 때니까 m이 들어감
    mSet.add(input[i]);
  }
}

let answer = [];
mSet.forEach((item) => {
  if (nSet.has(item)) answer.push(item);
});

answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));
