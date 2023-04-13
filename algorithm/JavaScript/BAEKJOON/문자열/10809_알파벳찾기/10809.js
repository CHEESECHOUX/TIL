/*
단어가 주어짐
알파벳 순서별로 존재하는 위치를 찍어주기


알파벳 a부터 z까지 for문을 돌릴 때, a 아스키코드 97번, z는 122번
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
// const input = fs.readFileSync("/dev/stdin").toString();

let result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(" "));

/*
// * String.fromCharCode(i)
아스키 코드 값을 문자로 변환 97부터 a로 변환

// *  input.indexOf(String.fromCharCode(i))
입력 문자열 input에서 알파벳이 처음으로 등장하는 위치를 반환하는 메서드
indexOf() 메서드는 해당 문자열이 없는 경우 -1반환
*/
