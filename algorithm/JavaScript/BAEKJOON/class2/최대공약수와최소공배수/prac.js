const fs = require("fs");
const [a, b] = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((el) => Number(el));

let A = a;
let B = b;

while (A % B !== 0) {
  let n = A % B;
  if (n !== 0) {
    A = B;
    B = n;
  }
}
