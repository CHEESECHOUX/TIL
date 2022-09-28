// generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// next(), return(), throw()

function* fn() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return 'finish';
  } catch (e) {
    console.log(e);
  }
}

const a = fn(); // generator 객체 반환

console.log(a.next()); // 로 호출시
// 1
// {value: 1, done: false}

// a.return('END');로 호출시
// {value: 'END', done: true} // done 속성값이 true가 되면서 
// a.next(); 
// {value: undefined, done: true} // 이후에 next를 실행해도 value를 얻을 수 없고 done은 true



// 배열 iterable
const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
console.log(it.next());

for(let num of arr) {
  console.log(num)
};



// generator 코드에 적용
function* fn2() {
  yield 4;
  yield 5;
  yield 6;
}

const a2 = fn2();
console.log(a2[Symbol.iterator]() === a2); // generator에 symbol.iterator 한게 a 자신이다

for(let num of a2) {
  console.log(num);
}


const str = 'Hello Jisoo';
console.log(str[Symbol.iterator]);

const xx = str[Symbol.iterator]()

console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());

for(let s of xx) {
  console.log(s);
}



// next()에 인수 전달
function* fn3() {
  const num1 = yield '첫 번째 숫자를 입력해주세요';
  console.log(num1);

  const num2 = yield '두 번째 숫자를 입력해주세요';
  console.log(num2);

  return num1 + num2;
}

const a3 = fn3();

console.log(a3.next());
console.log(a3.next(2)); // 인수로 넣어준 2는 num1에 저장됨



// 값을 미리 만들어 두지 않음
// generator는 필요한 값만 그때 그때 생성함
// 필요한 순간까지 계산을 미룰 수 있음!
function* fn4() {
  let index = 0;
  while (true) { // break 없는 while true 문 사용 가능
    yield index++; 
  }
}

const a4 = fn4();

console.log(a4.next());
console.log(a4.next());



// yield를 이용
function* gen1() {
  yield 'w';
  yield 'o';
  yield 'r';
  yield 'l';
  yield 'd';
}

function* gen2() {
  yield 'Hello,';
  yield* gen1(); // generator 객체가 아닌, 반복가능한 모든 객체도 올 수 있다.
  yield '!';
}

console.log(...gen2(2));