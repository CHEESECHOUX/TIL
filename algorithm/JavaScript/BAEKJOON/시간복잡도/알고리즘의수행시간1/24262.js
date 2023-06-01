/*
코드 수행 횟수, 알고리즘의 수행 시간

입력 값에 상관 없이 딱 한 번 A배열의 특정 인덱스를 조회해서 리턴

수행 횟수 1
수행 시간 0
입력과 무관한 시간 복잡도 함수는 O(1) 빅오 표기법에서는 상수항이 무시되므로 차수는 0이 됨
*/

const fs = require("fs");
input = fs
  .readFileSync("input.txt")
  .toString()
  .split("")
  .map((x) => Number(x));
// "/dev/stdin"

console.log(1);
console.log(0);
