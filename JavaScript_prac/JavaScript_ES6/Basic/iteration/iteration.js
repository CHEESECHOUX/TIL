// 이터레이션
const list = [10, 20];
for (let value of list) {
  console.log(value);
};
const obj = list[Symbol.iterator](); // 이터레이션 함수
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

/*
// for() 문의 반복 개념과 이터레이션의 차이

실행 결과
10
20
{ value: 10, done: false } // 배열의 첫 번째 값, 이터레이터 상태
{ value: 20, done: false }
{ value: undefined, done: true } // 처리할 값이 없음, 이터레이터 종료

이터레이션은 프로토콜(규약)을 갖고 있으며, 프로토콜에 따라 이터레이션을 수행함
*/