/*
세 각의 크기가 모두 60이면, Equilateral
세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
세 각의 합이 180이 아닌 경우에는 Error
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// "/dev/stdin"
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;

if (sum == 180) {
  if (a === 60 && b === 60 && c === 60) {
    console.log("Equilateral");
  } else if (a === b || b === c || c === a) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}

/*
if (((a == b) == c) == 60)
이 코드는 a와 b가 같은지 비교하고 c와 같은지 비교한 뒤, true false가 됨
*/
