// 첫 번째 풀이
function solution(s){
  let arr = Array.from(s);
  let firstArr = arr[0];
  let lastArr = s.charAt(s.length - 1)
  if( firstArr ===')' || lastArr === '(') {
    return false
  } else {
    firstArr === '(' && lastArr === ')'
    return true
  }
}

console.log(solution(')()('))
console.log(solution('())(()')) // 얘를 고려해줘야함


//
function solution(s) {
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === '(' ? 1 : -1; // '(' 가 없는데 ')'가 나오면 -1
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false; // 0보다 크면 '('가 더 남아있음
}