// 첫 번째 풀이
// 괄호의 짝이 맞는지 고려 안 했음
function solution(s) {
  let arr = Array.from(s);
  let firstArr = arr[0];
  let lastArr = s.charAt(s.length - 1);
  if (firstArr === ")" || lastArr === "(") {
    return false;
  } else {
    firstArr === "(" && lastArr === ")";
    return true;
  }
}

// 효율성 테스트 2개 실패
function solution(s) {
  if (s.length === 0) return true; // 빈 문자열인 경우
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? 1 : -1; // '(' 가 없는데 ')'가 나오면 -1
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false; // 0보다 크면 '('가 더 남아있음
}

// 효율성 테스트 1개 실패
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("("); // '('는 스택에 삽입
    } else {
      if (stack.length === 0) return false; // 스택이 비어있는 경우
      stack.pop(); // ')'는 스택에서 제거
    }
  }
  return stack.length === 0; // 스택이 비어있는 경우 true, 그렇지 않으면 false 반환
}

console.log(solution(")()("));
console.log(solution("())(()")); // 얘를 고려해줘야함
