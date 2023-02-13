// 왜... 프로그래머스에서는 안 되는 거지?
function solution(s) {
  const arr = s.split(' ');
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  const answer = `${min.toString()} ${max.toString()}`;
  return answer;
  }


// 이거는 됨
function solution(s) {
  arr = s.split(" ")
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return min+" "+max;
}


// 깔끔한 답
function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr)+' '+Math.max(...arr);
}


// 다른 방법 찾아봄
function solution(num) {
  let arr = num.split(' ');
  let numArr = arr.map(element => parseInt(element)).sort((a,b)=> a-b);

  return `${numArr[0].toString()} ${numArr[numArr.length-1].toString()}`
}
console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));

