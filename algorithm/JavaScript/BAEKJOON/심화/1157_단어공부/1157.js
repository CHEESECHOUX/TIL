let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().toLowerCase();
// let input = fs.readFileSync("/dev/stdin").toString().toLowerCase();

const result = new Array(26).fill(0); // a부터 z까지 담으려고

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++; // a를 0으로 시작하기 위해 97을 뺌
}

const max = Math.max(...result); // result 배열에서 가장 큰 값 찾기
const index = result.indexOf(max); // result 배열에서 가장 큰 값이 있는 인덱스 찾기
console.log(max);
console.log(index);

let isSame = false; // 가장 많이 존재하는 알파벳이 유일한지

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
