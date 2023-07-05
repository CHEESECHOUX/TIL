/*
나이
먼저 가입한 사람 (이름)
*/
const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input.shift());

let arr = [];

for (let i = 0; i < n; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(arr.map(([age, name]) => age + " " + name).join("\n"));
