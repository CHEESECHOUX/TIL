/*
자연수 N
N개의 정수
M
M개의 수

넷째줄 M개의 수가 둘째줄에 존재하는지 확인

존재하면 1
존재하지 않으면 0
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const N = input[0];
const arrN = [...input[1].split(" ")].map((el) => Number(el));

const M = input[2];
const arrM = [...input[3].split(" ")].map((el) => Number(el));

// 시간 초과 : 시간 복잡도 O(M * N)
// arrN의 모든 원소를 검사해야되기 때문에
for (let i = 0; i < M; i++) {
  if (arrN.includes(arrM[i])) {
    console.log(1);
  } else {
    console.log(0);
  }
}

// 시간 초과 : 시간복잡도 O(M)
// 전체 시간 복잡도는 O(N + M)
const setN = new Set(arrN); // O(N)

for (let i = 0; i < M; i++) {
  if (setN.has(arrM[i])) {
    console.log(1);
  } else {
    console.log(0);
  }
}

// 통과 : 이분 탐색 방법
// N에서 값을 찾기 때문에 M의 길이가 아닌 N의 길이로 시작

const [n, a, m, b] = input.map((v) => v.split(" ").map((x) => Number(x)));

a.sort((a, b) => a - b);

// 이분 탐색
const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2); // 중간 위치 계산

  if (right < left) {
    // 탐색 종료 조건 - right가 left보다 작아지면 탐색해야 할 범위가 더 이상 없다는 것을 의미
    return list[mid] == target ? 1 : 0; // right < left 일 때 중간 위치의 값이 타겟과 같은지 확인
  }

  if (list[mid] > target) {
    // 중간 위치의 값이 타겟 값보다 크다면
    right = mid - 1; // 타겟 값은 중간 위치의 왼쪽에 위치해야함
  } else {
    left = mid + 1;
  }

  return binarySearch(list, target, left, right, mid); // 재귀 호출
};

const result = B.map((v) => binarySearch(a, v, 0, a.length - 1, 0)); // b 배열의 각 원소에 대해 이분 탐색 수행 (mid는 여기서 설정 안 해도 되지만 코드 가독성을 위해)
console.log(result.join("\n"));
