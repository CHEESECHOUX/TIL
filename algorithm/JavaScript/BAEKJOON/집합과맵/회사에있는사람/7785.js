/*
출입 로그가 주어졌을 때,
현재 회사에 있는 모든 사람을 구하기

n 출입 기록의 수
이름 enter/leave

현재 회사에 있는 사람의 이름을 사전 순의 역순으로
한 줄에 한 명씩 출력
*/

const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ")); // el은 각 줄의 문자열 / "Baha enter"라는 문자열을 split(" ") 메서드로 분리하면 ["Baha", "enter"]

const n = Number(input.shift());

let logs = new Map(input.map((el) => [el[0], el[1]])); // input 배열의 각 요소에 대해 첫 번째와 두 번째 단어로 이루어진 배열 생성
// Map(3) { 'Baha' => 'leave', 'Askar' => 'enter', 'Artem' => 'enter' } 중복 값 삭제해서 마지막 값 저장해줌
let result = [];

for (let key of logs.keys()) {
  if (logs.get(key) === "enter") {
    result.push(key);
  }
}
/* 
// logs.keys() : logs 맵 객체에서 모든 키를 포함하는 이터레이터 반환하는 메서드 = 맵 객체의 모든 키를 순회할 수 있다.
for of 루프를 사용해 logs.keys()에서 반환된 이터레이터를 순환하면서, 각각의 키를 key 변수에 할당

key 변수에는 Baha 할당
logs.get('Baha') === "enter" 평가
false 이므로 조건문의 내용 실행 안 함
*/
result.sort().reverse();

console.log(result.join("\n"));
