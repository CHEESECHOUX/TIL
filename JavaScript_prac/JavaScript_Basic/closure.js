function makeCounter() {
  let num = 0;

  return function () {
    return num ++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2 계속 기억하고 있는 것



// 스코프 체인
let d = 'X';

function outer() {
  let a = 1;
  let b = 'B';

  function inner() {
    let a = 2;
    console.log(b); // inner함수 안에는 b, d가 없음
    console.log(d);
  }
  inner();
}

outer();



// 클로저
let c = 'X';

function outer() { // outer는 inner 함수를 리턴
  let a = 1;
  let b = 'B';

  function inner() {
    let a = 2;
    console.log(b);
  }
  return inner
}

let someFun = outer(); // 여기서 b가 출력됨
someFun();             // 생성한 시점의 스코프 체인을 계속 들고있음