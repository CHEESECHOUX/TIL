//
function solution(n) {
  let answer = 0;
  let arr = (n+'').split('').map(Number);
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}


//
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0); // reduce 안에서 바로 Number형변환
}


console.log(solution(1234));