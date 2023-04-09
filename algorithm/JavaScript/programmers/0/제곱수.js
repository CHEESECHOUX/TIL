//
function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 !== 0) {
    answer = 2;
  } else {
    answer = 1;
  }
  return answer;
}

console.log(solution(144));
console.log(solution(976));
// console.log(31.240998703626616 % 1);
// console.log(12 % 1);

//
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
