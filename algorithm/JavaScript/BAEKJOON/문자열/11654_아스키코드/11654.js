const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let result = input[0].charCodeAt(); //문자

console.log(result);

/*
// 오답
let num = input[0];

console.log(num.charCodeAt(num));

//
num.charCodeAt(num)은 num문자열에서 num번째의 문자의 아스키 코드 값을 반환함
num변수에는 입력받은 숫자 문자열이 저장되어 있기 때문에
num문자열의 길이보다 큰 인덱스를 사용하므로 오류가 발생하게 됨

num.charCodeAt(0)을 사용해 아스키코드 값을 반환해야 정답임!
*/
