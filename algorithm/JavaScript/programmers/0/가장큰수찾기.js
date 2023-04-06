//
function solution(array) {
  let answer = [];
  let max = array[0];
  let index = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = array.findIndex(v => v == max)
      answer = [max, index]
      // console.log(answer)
    }
  }
  return answer
}

// 다른 사람 풀이
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

console.log(solution([9, 10, 11, 8]));