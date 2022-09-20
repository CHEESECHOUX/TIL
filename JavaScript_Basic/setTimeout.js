// setTimeout
function fn() {
  console.log(3)
}

setTimeout(fn, 3000);

//
setTimeout(function() {
  console.log(3)
}, 3000);



//
const tId = function showName(name) {
  console.log(name);
  setTimeout(showName, 3000, 'Jisoo');  // 인수를 마지막에 넣어줌
}

clearTimeout(tId) // 예정된 작업을 삭제



// setInterval 한 번 실행하고 끝나는 것이 아닌 계속 반복 수행
function showName(name) {
  console.log(name);
}

const tId2 = setInterval(showName, 3000, 'Susie');

clearInterval(tId2);



// delay
setTimeout(function() {
  console.log(2)
}, 0);
console.log(1);



// setInterval, clearInterval
let num = 0;

function showTime() {
  console.log(`안녕하세요. 접속한지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId3);
  }
}

const tId3 = setInterval(showTime, 1000);