const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
// "/dev/stdin"

let x = Number(input);
groupNum = 0;

const up = [];
const down = [];

while (x > 0) {
  // 1번째 그룹인지부터 체크하면서 해당그룹이 아닐시 input 값에서 그 그룹을 빼준다. 만약 반복해서 빼주다가 input값이 0또는 음수가된다면, 그 그룹에 해당하는것이다.
  groupNum++;
  x = x - groupNum;
}
console.log(x, groupNum);

for (let i = 0; i < groupNum; i++) {
  up.push(i + 1);
  down.push(groupNum - i);
}
console.log(up, down);

if (groupNum % 2 === 0) {
  console.log(`${up[x + groupNum - 1]}/${down[x + groupNum - 1]}`);
} else {
  console.log(`${down[x + groupNum - 1]}/${up[x + groupNum - 1]}`);
}
// x는 그룹내에서 상대적위치
