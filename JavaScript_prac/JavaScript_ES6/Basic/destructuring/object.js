// Object 분할 할당
// object의 프로퍼티를 분할해 할당

// 1. 프로퍼티 이름이 같은 프로퍼티에 값을 할당
const { one, two } = { one: 10, two: 20 };
console.log(one);
console.log(two);

// 2. 프로퍼티 이름을 별도로 작성
let one2, two2;
({ one2, two2 } = { one2: 10, two2: 20 }); // 소괄호 안에 작성해야함
console.log(one2);
console.log(two2);

// 3. 값 위치에 변수 이름 작성
let five, six;
({ one: five, two: six } = { one: 5, two: 6 });
console.log(five);
console.log(six);
/*
console.log(one) 을 실행하면 ReferenceError 발생

프로퍼티 이름으로 값을 구할 수 없음.
이 코드에서는 five, six의 변수값을 구하는 것이 목적임.
*/

// 4. Object 구조에 맞춰 값 할당
const { one4, plus: { two4, three4 }}
  = { one4: 10, plus: { two4: 20, three4: 30 }};
console.log(one4);
console.log(two4);
console.log(three4);
/*
console.log(plus) 를 실행하면 ReferenceError 발생
plus는 단순히 구조(경로)를 만들기 위한 것으로 실제 존재하지 않음.
*/

// 5. 나머지를 Object로 할당
const { one5, ...rest5 }
  = { one5: 10, two5: 20, three5: 30 };
console.log(rest5);




// 파라미터 분할 할당

/* 1. 호출하는 함수(add)에서 Object 형태로 넘겨준 파라미터 값을
  호출받는 함수의 파라미터에 맞추어 할당*/
function add({ one, two }) {
  console.log(one + two);
};
add({ one: 10, two: 20 });

// 2. Object 구조에 맞추어 값 할당
function add({ three, plus: { four }}) {
  console.log(three + four);
};
add({ three: 30, plus: { four: 40 }});
/*
호출하는 함수에서 넘겨준 Object 구조와 프로퍼티에 맞춰 프로퍼티 값을 할당
*/