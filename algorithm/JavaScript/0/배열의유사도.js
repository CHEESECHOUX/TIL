//
function solution(s1, s2) {
  let answer = s1.filter( x => s2.includes(x));
  return answer.length;
}


//
function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; i++) {
      if (s1[i] === s2[i]) answer ++;
    }
  }
  return answer;
}


console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]))