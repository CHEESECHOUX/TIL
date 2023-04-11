/*
첫 번째로 풀었던거랑 비슷한데 더 간결함 
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

let student = new Array(31).fill(0); // 인덱스 1부터 사용하려고

for (let i = 0; i < 28; i++) {
  let done = Number(input[i]);
  // console.log(done);
  student[done] = 1; // 과제 제출한 인덱스는 1로 변경
}

for (let i = 1; i <= 30; i++) {
  if (student[i] === 0) {
    console.log(i); // 이렇게 하면 바로 작은 번호부터 나옴
  }
}

// for (let i = 1; i <= 30; i++) { // 이것도 될 것 같은데 왜 안 되지? 아.. student 0으로 다 채워서 안 된다
//   if (!student.includes(i)) {
//     console.log(i);
//   }
// }
