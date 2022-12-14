// Symbol()

// Symbol() 함수는 값을 생성해 반환
// 1. 반환된 값을 볼 수 없음
const sym = Symbol();
console.log(sym);
console.log(typeof sym);


// 2. 프로그램 전체를 통해 유일한 값 제공
const one = Symbol();
const two = Symbol();
console.log(one == two);


// 3. Symbol 값으로 연산 불가
let sym3 = Symbol();
try {
  const add = sym3 + 5;
} catch(e) {
  console.log("연산 불가")
};


// 4. Symbol 타입 변경 불가
let sym4 = Symbol();
try {
  + sym;
} catch {
  console.log("값 타입 변경 불가");
};