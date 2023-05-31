const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"
for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i].split(" ").map((x) => Number(x));

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  let arr = [a, b, c];
  arr.sort((x, y) => x - y);

  let long = arr[2];
  let sum = arr[0] + arr[1];

  if (long < sum) {
    if (a === b && b === c) {
      console.log("Equilateral");
    } else if (a == b || b == c || c == a) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
}

// 다른 사람 답
for (let i = 0; i < input.length; i++) {
  const li = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (li[0] === li[1] && li[1] === li[2] && li[0] === 0) {
    break;
  }

  if (li[0] + li[1] <= li[2]) {
    console.log("Invalid");
  } else if (li[0] === li[1] && li[1] === li[2]) {
    console.log("Equilateral");
  } else if (li[0] === li[1] || li[1] === li[2] || li[2] === li[0]) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
