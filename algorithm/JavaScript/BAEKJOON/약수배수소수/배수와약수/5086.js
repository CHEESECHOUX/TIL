const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
// "/dev/stdin"

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map((x) => Number(x));

  if (a === 0 && b === 0) {
    break; // 입력이 "0 0"인 경우 반복문 종료
  }

  if (b % a == 0) {
    console.log("factor");
  } else if (a % b == 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}

// 다른 사람 풀이
input.pop(); // 0 0 요소 제거하기
const nums = input.map((v) => v.split(" ").map((x) => +x));

nums.forEach((v) => {
  if (v[1] % v[0] == 0) {
    console.log("factor");
  } else if (v[0] % v[1] == 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
});
