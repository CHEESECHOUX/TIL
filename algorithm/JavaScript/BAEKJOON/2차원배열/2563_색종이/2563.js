/*
도화지 크기는 가로 세로 100

색종이 크기는 가로 세로 10
색종이가 붙은 위치(왼쪽 아랫부분)

도화지에 색종이가 붙은 영역의 넓이를 구해라
*/

// 모르겠어서 정답 봄..
const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((y) => Number(y)));
// "/dev/stdin"

// 도화지에 색종이 붙이기
let paper = new Array(100).fill().map((el) => new Array(100).fill(false)); // 도화지를 false로 채워놓고

for (let i = 0; i < input.length; i++) {
  const colorPaper = input[i];
  const x = colorPaper[0];
  const y = colorPaper[1];

  for (let j = 0; j < 10; j++) {
    for (let m = 0; m < 10; m++) {
      // 10x10 크기의 사각형을 만들기 위한 인덱스
      paper[x + j][y + m] = true; // 왼쪽 아래 모서리의 좌표를 구해서 해당 위치가 true가 되도록
    }
  }
}

// true의 개수 계산
const answer = paper.reduce((prev, curr) => {
  for (const el of curr) {
    if (el) {
      prev++; // true 일때만 1증가
    }
  }
  return prev;
}, 0); // 0 초기값

console.log(answer);
