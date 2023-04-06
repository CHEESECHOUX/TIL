//
function solution(message) {
  let countMessage = message.split('');
  return countMessage.length * 2;
}


// 바로.. length 찍으면 됐다...
function solution(message) {
  return message.length * 2;
}

console.log(solution("happy birthday!"))