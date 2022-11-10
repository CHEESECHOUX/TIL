// 화살표함수
const add = function(one, two) {
  return one + two;
};
console.log(add(1, 2));

const total = (one, two) => {
  return one + two;
};
console.log(total(1, 2));




// 함수 블록과 return 생략
const total2 = (one, two) => one + two;
console.log(total2(1, 2));


// 함수 블록만 작성
const total3 = (one) => {};
console.log(total3(1));
/*
실행 결과
undefined

함수 블록만 작성하면, 함수 블록에 return 문을 작성하지 않은 것으로 보고 undefined를 반환
*/


// { key: value } 를 반환하는 형태
const point = (param) => ({ book: param });
const result = point("책");
for (const key in result) {
  console.log(key + ": " + result[key]);
};
/*
실행 결과
book: 책

소괄호를 작성하지 않으면 undefined 반환
*/




// 파라미터 사용

// 파라미터가 하나일 때 소괄호 생략 가능
const get = param => param + 20;
console.log(get(10));

// 파라미터가 없으면 소괄호만 작성 가능
const get2 = () => 10 + 20;
console.log(get2());