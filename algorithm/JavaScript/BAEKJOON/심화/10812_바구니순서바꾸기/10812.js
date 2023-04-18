/*
// * 어려오오 정답 봄
바구니 총 n개
각 바구니에는 1번부터 n번까지 순서 적혀있음

m번 바구니의 순서를 회전시킴

i j k
왼쪽으로부터 i부터 j번까지 회전 / 기준은 k

j요소 다음에 i요소부터 차례대로 담기
*/

const fs = require("fs");
const [NnM, ...exes] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const [NnM, ...exes] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = NnM.split(" ").map((x) => Number(x));
let basket = new Array(n).fill(1).map((a, b) => a + b);

const execute = (str) => {
  const [i, j, k] = str.split(" ").map((x) => +x - 1); // 연산문자열 x를 숫자로 변환한 후 1을 빼서 0부터 시작하는 인덱스로 변환
  const tempBasket = [...basket];
  // console.log(tempBasket);

  basket = tempBasket
    .slice(0, i)
    .concat(tempBasket.slice(k, j + 1).concat(tempBasket.slice(i, k)))
    .concat(tempBasket.slice(j + 1, tempBasket.length)); // tempBasket 배열의 j + 1번째 인덱스부터 마지막 인덱스까지 요소를 추출하고, 이어붙이기
};

exes.forEach(execute);
console.log(basket.join(" "));
