/*
바구니 총 n개 / 바구니에 공 1개씩(바구니에 적혀있는 번호와 공 같은 번호)
첫째 줄 n, m
둘째 줄 m개의 줄에 걸쳐서 공을 교환할 방법
i번 바구니와 j번 바구니에 들어있는 공을 교환

1번 바구니부터 n번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map((x) => Number(x));
let basket = new Array(n).fill(1).map((a, b) => a + b);

for (let i = 0; i < m; i++) {
  let [first, second] = input[i + 1].split(" ").map((x) => Number(x)); // input[0]에는 n,m이 있으니까
  let tmp = basket[first - 1];
  basket[first - 1] = basket[second - 1];
  basket[second - 1] = tmp; // 지정해주고 갖다 넣는 걸 몰랐음
}

console.log(basket.join(" "));
