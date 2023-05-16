/*
6, 12, 18, 24 
*/

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
// "/dev/stdin"

let range = 1;
let block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);
