const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

const ascending = [1, 2, 3, 4, 5, 6, 7, 8];
const descending = [8, 7, 6, 5, 4, 3, 2, 1];

function equal(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

if (equal(input, ascending)) {
  console.log("ascending");
} else if (equal(input, descending)) {
  console.log("descending");
} else {
  console.log("mixed");
}

// 다른 사람 풀이 방법

const inputAsString = input.join(" ");

const result = {
  "1 2 3 4 5 6 7 8": "ascending",
  "8 7 6 5 4 3 2 1": "descending",
}[inputAsString];

console.log(result || "mixed");
