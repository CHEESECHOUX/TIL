/*
5597 과제 안 내신분

학생 30명
특별과제 28명 제출 / 제출 안 한 학생 2명 구하기

출력 2줄
제출하지 않은 학생의 출석번호중 가장 작은 번호
그다음 큰 번호
*/

/*
30까지 student 배열 만들어서
student 배열 요소랑 input 값이랑 하나씩 비교해서 있으면 삭제
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let student = new Array(30).fill(1).map((a, b) => a + b);

for (let i = 0; i < 28; i++) {
  let done = input[i].split(" ").map((x) => Number(x));

  done.forEach((j) => {
    let index = student.indexOf(j);
    if (index !== -1) {
      student.splice(index, 1);
    }
  });
}

student.sort((a, b) => a - b);

console.log(student[0], student[1]);
