/*
n명의 학생
점수가 가장 높은 k명 상받음

커트라인 : 상 받는 사람중 가장 낮은 점수

n, k
각 학생의 점수 x
*/

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map((el) => Number(el));
let score = input[1].split(" ").map((el) => Number(el));

let sort = [...score].sort((a, b) => b - a);
let answer = sort[k - 1];

console.log(answer);
