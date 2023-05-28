const fs = require("fs");
let n = Number(fs.readFileSync("input.txt").toString());
// "/dev/stdin"

console.log(n * 4);
