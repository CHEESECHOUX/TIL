/*
좌표 압축 : 해당 좌표의 값을 그 값보다 작은 좌표값 개수로 대체한다
*/

// 이해가 안 된다...
const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);

// 좌표 압축
const sortedNums = [...new Set(nums)].sort((a, b) => a - b); // 중복 제거 및 오름차순
const compressed = {}; // 각 숫자와 해당 숫자의 인덱스를 매핑하기 위한 객체

for (let i = 0; i < sortedNums.length; i++) {
  // for 루프를 통한 num과 인덱스 매핑
  compressed[sortedNums[i]] = i;
}
/*
compressed[1] = 0
compressed[2] = 1
compressed[3] = 2
compressed[5] = 3
*/

// 결과 출력
let answer = "";
for (let i = 0; i < n; i++) {
  answer += compressed[nums[i]] + " "; // 'nums 배열의 i에 해당하는 요소'에 대응하는 압축된 값을 찾아 + 공백 추가
}
console.log(answer);
