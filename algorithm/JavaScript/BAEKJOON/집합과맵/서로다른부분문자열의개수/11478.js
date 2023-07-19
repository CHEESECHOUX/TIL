/*
문자열 S
서로 다른 부분 문자열의 개수를 구하는 프로그램
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split(/\s/);

const s = input[0]; // 배열을 문자열로
let answer = new Set();

for (let i = 0; i < s.length; i++) {
  for (let j = i; j < s.length; j++) {
    answer.add(s.substring(i, j + 1)); // substring (시작, 종료위치)
  }
}
console.log(answer.size);

/*
바깥쪽 반복문에서 i는 0부터 시작해 1씩 증가
// 첫 번째 반복에서 i는 0

안쪽 반복문에서 j는 i부터 시작해 s의 길이인 3까지 1씩 증가

s.substring(0, 0 + 1)
s.substring(0, 1)
answer에 "a"가 추가

// 두 번째 반복에서는 j는  1부터 2까지 증가
s.substring(0, 1 + 1)
s.substring(0, 2)는 "ab"

// 세 번째 반복에서는 j는 2부터 2까지 증가
s.substring(0, 2 + 1)
s.substring(0, 3)은 "abc"

바깥쪽 반복문에서 i는 1이 됨
// 첫 번째 반복
s.substring(1, 1 + 1)
s.substring(1, 2)는 b

// 두번째 반복
s.substring(1, 3)은 "bc"
*/
