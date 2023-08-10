const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] === "0") continue;

  const str = input[i];
  const reversedStr = [...str].reverse().join("");

  if (str === reversedStr) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
