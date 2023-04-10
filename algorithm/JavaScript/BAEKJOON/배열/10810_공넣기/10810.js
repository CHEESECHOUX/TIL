/*
10810 공넣기

총 n개의 바구니, 총 n개의 공
M번 공을 넣을 수 있음

i번 바구니부터 j번 바구니까지, k번 번호가 적혀진 공을 넣음
*/
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map((x) => Number(x));
let basket = new Array(n).fill(0); // [ <5 empty items> ] 바구니에 들어가 있는 공의 수를 저장

for (let i = 1; i <= m; i++) {
  let [start, end, ballNum] = input[i].split(" ").map((x) => Number(x));
  for (let j = start; j <= end; j++) {
    basket[j - 1] = ballNum; // basket 배열에서 해당하는 인덱스(k - 1)에 ballNum 넣기
  }
}
for (let k = 0; k < basket.length; k++) {
  typeof basket[k] === "undefined" ? (basket[k] = 0) : basket[k]; // 공이 들어있지 않은 바구니는 0출력
}
console.log(basket.join(" "));
