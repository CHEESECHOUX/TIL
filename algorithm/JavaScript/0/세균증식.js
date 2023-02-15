//
function solution(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}

//
function solution(n, t) {
  const answer = new Array(t).fill(n).reduce((prev, cur) => prev*2, n);
  return answer;
}

console.log(solution(2, 10));