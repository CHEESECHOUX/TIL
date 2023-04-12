/*
바구니 총 n개, m번 바구니의 순서를 역순으로 바꿈

순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만듦

첫째줄 n,m
둘째줄 m개의 줄에는 바구니의 순서를 역순으로 만드는 방법이 주어짐 i j
i번째 바구니부터 j번째 바구니의 순서를 역순으로 만든다

모든 순서를 바꾸고, 바구니에 적혀진 번호를 순서대로 출력
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map((x) => Number(x));
let basket = new Array(n).fill(1).map((a, b) => a + b);

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map((x) => Number(x));
  let arr = [];

  for (let j = a - 1; j < b; j++) {
    // 배열이 0부터 시작하니까 a - 1
    arr.push(basket[j]); // basket배열에서 j번째 인덱스의 값을 추출해 arr배열에 추가
    console.log(arr);
  }

  arr.reverse();
  basket.splice(a - 1, b - a + 1, ...arr); // a-1번째 인덱스부터 b번째 인덱스까지의 값을 삭제
}
console.log(basket.join(" "));

/*
// basket.splice(a - 1, b - a + 1, ...arr);

예를 들어
a가 3이고, b가 6인경우
arr배열은 basket배열에서 3번째부터 6번쨰까지의 요소를 역순으로 저장함 -> 3번째부터 6번째까지의 요소를 삭제해야함
basket.splice(2, 4, ...arr)가 되야하는 것임!
*/
