function solution(n, numlist) {
  let result = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      result.push(numlist[i])
    }
  }
  return result;
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]))

// 다른 사람 풀이
let solution = (n, numlist) => numlist.filter(a => a % n === 0);