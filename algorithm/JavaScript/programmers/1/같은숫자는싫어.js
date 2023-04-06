// 스택
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) answer.push(arr[i])
  }
  return answer;
}


// 다른 사람 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index+1]); // 요소 값이랑 비교하면 끝
}

console.log(solution([1,1,3,3,0,1,1]))