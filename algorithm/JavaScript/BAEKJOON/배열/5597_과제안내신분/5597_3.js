/*
다른 사람이 풀이

map 객체를 먼저 생성
nums의 배열 요소를 map 객체에 추가
*/

//* 인풋 - 커스텀, 함수 콜
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const nums = input.map((num) => Number(num));
sol(nums);
console.log(nums);

//* 로직함수
function sol(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1); // Map(28) { 1 => 1, 2 => 1, 3 => 1 ...} map에 어떤 값을 넣어주려면 두 개의 인자가 필요하기 때문에 value 1로 넣어줌
  }

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i); // 오... has.. 없는 값만 반환
    }
  }
}
