/*
마방진 문제... 헤헤.. 처음 본다...

마방진은 n x n 행렬에서 모든 행과 열, 대각선의 합이 항상 동일한 값을 가진다.
3 x 3 마방진의 경우의 수는 8개밖에 되지 않아, 미리 만들어놓고 하나씩 비교해 값을 구하는게 간단하고 빠르다고 한다.
*/

function formingMagicSquare(s) {
  let arr = [];
  arr.push([
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ]);
  arr.push([
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ]);
  arr.push([
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ]);
  arr.push([
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ]);
  arr.push([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ]);
  arr.push([
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ]);
  arr.push([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ]);
  arr.push([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ]);

  let min = Number.MAX_VALUE; // 가장 큰 최대 숫자값
  for (let i = 0; i < 8; i++) {
    let minCost = 0;

    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        minCost += Math.abs(arr[i][j][k] - s[j][k]);
      }
    }
    if (min > minCost) {
      min = minCost;
    }
  }
  return min;
}
