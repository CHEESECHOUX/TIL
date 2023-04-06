//
function solution(s) {
  const words = s.split(' ')
    .map(word => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase());

    console.log(words)
    console.log((words.join()))
    console.log((words.join(' ')))
return words.join(' ');
}

console.log(solution("3people unFollowed me"))


//
function solution(s) {
  let answer = '';
  for (let i=0; i<s.length; i++) {
    if (i === 0 || s[i-1 === ' ']) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}