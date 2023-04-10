// 10871 X보다 작은수

let input = require("fs").readFileSync("input.txt").toString().split("\n");

let num = input[0].split(" ").map((x) => Number(x));
let arr = input[1].split(" ").map((x) => Number(x));

const answer = [];

for (i = 0; i < arr.length; i++) {
  if (num[1] > arr[i]) {
    answer.push(arr[i]);
  }
}

// arr.forEach((item) => {
//   if (item < num[1]) answer.push(item);
// });

console.log(answer.join(" "));
