// input값이 자바스크립트 기본형 Number타입으로 표현할 수 있는 범위를 넘어서 BigInt로 처리해야함

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");
// "/dev/stdin"

const a = BigInt(input[0]);
const b = BigInt(input[1]);

let answer = a + b;

console.log(answer.toString()); //문자열로 변환해야 끝에 n이 안 붙어나옴
