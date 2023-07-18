/*
대칭 차집합 = (A-B)와 (B-A)의 합집합
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [a, b] = input.shift().split(" ");
const aSet = new Set(input[0].split(" ").map((el) => +el)); // 숫자 타입으로 변환
const bSet = new Set(input[1].split(" ").map((el) => +el));

/*
// 첫 번째 방법 - 배열 사용(filter는 배열 메서드)
[...aSet, ...bSet]은 [1, 2, 4, 2, 3, 4, 5]
filter 메서드를 사용해 aSet과 bSet에 동시에 포함된 요소를 걸러냄
res에는 동시에 속하지 않는 요소 [1, 3, 5, 6] 할당
*/
const res = [...aSet, ...bSet].filter((el) => !(aSet.has(el) && bSet.has(el)));
console.log(res.length);

// (A - B)와 (B - A)의 합집합 구하기
const aMinusB = new Set([...aSet].filter((el) => !bSet.has(el)));
const bMinusA = new Set([...bSet].filter((el) => !aSet.has(el)));
const union = new Set([...aMinusB, ...bMinusA]); // 두 set 합치기

console.log(union.size);
