/*
m*n 정사각형
8*8 체스판으로 만들고 싶음

체스판을 색칠하는 경우는 두 가지
맨 왼쪽 위칸이 흰색 / 검은색

8*8 크기는 아무데서나 고르고, 다시 칠해야하는 정사각형의 최소 개수를 구하기
8 <= n, m <= 50

어디서부터 자르지..?
*/

// 정답 봤다
const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let NM = input.shift().split(" ");
let N = Number(NM.shift());
let M = Number(NM.shift());

// 정상적으로 칠해진 8*8 크기의 체스판 2개 미리 생성
let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

let board = [];
for (let i = 0; i < N; i++) {
  board[i] = input.shift().split("");
}

// 초기값(임의로 90)
let answer = 90;

//8*8 체스판을 순회하면서 변경 횟수를 계산
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    check(j, i); // check 함수 호출
  }
}

// 미리 만들어둔 white, black 체크판과 board 비교하기
function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== white[i - y][j - x]) {
        checkWhite++;
      }
      if (board[i][j] !== black[i - y][j - x]) {
        checkBlack++;
      }
    }
  }

  let min = checkBlack < checkWhite ? checkBlack : checkWhite;

  if (min < answer) {
    answer = min;
  }
}

console.log(answer);
