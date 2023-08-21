/*
정수를 저장하는 스택

push : 정수를 스택에 넣기
pop :  스택에서 가장 위에 있는 정수를 빼고 출력 / 없으면 -1 출력
size : 스택 정수 개수 출력
empty : 비어있으면 1 아니면 0 출력
top : 스택의 가장 위에 있는 정수 출력 / 없으면 -1 출력
*/

function solution() {
  const fs = require("fs");
  const input = fs.readFileSync("input.txt").toString().split("\n");

  const len = input[0];
  const stack = [];
  const answer = [];

  const cmdObj = {
    push: (x) => {
      stack.push(x);
    },
    pop: () => {
      return stack.length === 0 ? -1 : stack.pop();
    },
    size: () => {
      return stack.length;
    },
    empty: () => {
      return stack.length === 0 ? 1 : 0;
    },
    top: () => {
      return stack.length === 0 ? -1 : stack[stack.length - 1]; //stack.length - 1은 마지막 요소의 인덱스
    },
  };

  for (let i = 1; i <= len; i++) {
    const [cmd, num] = input[i].trim().split(/\s/g);
    //split(/\s/g) 공백이 제거된 문자열을 공백 기준으로 나누어 배열로 반환
    // 만약 명령어가 "push 3"이라면 cmd에는 "push", num에는 "3"

    if (cmd === "push") cmdObj.push(parseInt(num));
    else answer.push(cmdObj[cmd]()); // cmdObj 객체에서 cmd 문자열에 해당하는 함수를 호출
  }
  console.log(answer.join("\n"));
}
solution();
